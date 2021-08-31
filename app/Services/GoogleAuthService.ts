
import axios from 'axios';
import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import querystring from "querystring";
import Google from '../../config/Google';
import IAuthService from './IAuthService';
import { request, response } from 'express';
const app = express();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, COOKIE_NAME, JWT_SECRET, SERVER_ROOT_URI, UI_ROOT_URI } = Google;


class GoogleAuthService implements IAuthService {
  

  public redirectURI = "auth/google";

    generateCredentials() : void{

        this.gooleAuthUrl();
        this.getTokens(Google);
        this.googleUserCode();


    }


//    validateCredentials(): void { }

    
    

    gooleAuthUrl() {

        const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
        const options = {
          redirect_uri: `${SERVER_ROOT_URI}/${this.redirectURI}`,
          client_id: GOOGLE_CLIENT_ID,
          access_type: "offline",
          response_type: "code",
          prompt: "consent",
          scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
          ].join(" "),
        };
      
        return `${rootUrl}?${querystring.stringify(options)}`;
    }


    getLoginUrl() {
        return this.gooleAuthUrl();
    }
            
          


    getTokens({
        code,
        clientId,
        clientSecret,
        redirectUri,
      }: {
        code: string;
        clientId: string;
        clientSecret: string;
        redirectUri: string;
      }): Promise<{
        access_token: string;
        expires_in: Number;
        refresh_token: string;
        scope: string;
        id_token: string;
      }> {
        /*
         * Uses the code to get tokens
         * that can be used to fetch the user's profile
         */
        const url = "https://oauth2.googleapis.com/token";
        const values = {
          code,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri,
          grant_type: "authorization_code",
        }
      
        const authToken = axios
            headers: {
              "Content-Type": "application/x-www-form-urlencoded";
            }
          return authToken(url)

          .then((res) => res.data)
          .catch((error) => {
            console.error(`Failed to fetch auth tokens`);
            throw new Error(error.message);
          });

    }

    async googleUserCode(){

    // Getting the user from Google with the code
        const code = request.query.code as string;
        const { id_token, access_token } = await this.getTokens({
          code,
          clientId: GOOGLE_CLIENT_ID,
          clientSecret: GOOGLE_CLIENT_SECRET,
          redirectUri: `${SERVER_ROOT_URI}/${this.redirectURI}`,
        });
      
        // Fetch the user's profile with the access token and bearer
        const googleUser = await axios
          (
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
            {
              headers: {
                Authorization: `Bearer ${id_token}`,
              },
            }
          )
          .then((res) => res.data)
          .catch((error) => {
            console.error(`Failed to fetch user`);
            throw new Error(error.message);
          });
      
        const token = jwt.sign(googleUser, JWT_SECRET);
      
        response.cookie(COOKIE_NAME, token, {
          maxAge: 900000,
          httpOnly: true,
          secure: false,
        });
      
        response.redirect(UI_ROOT_URI);
      

    }

// Getting the current user
    getCurrentUser(){

        try {
            const decoded = jwt.verify(request.cookies[COOKIE_NAME], JWT_SECRET);
            console.log("decoded", decoded);
            return response.send(decoded);
        } catch (err) {
            console.log(err);
            response.send(null);
            }
        }
}

export default GoogleAuthService;









    

    




/*
    gooleAuthUrl() {
        const stringifiedParams = queryString.stringify({
        client_id: GOOGLE_CLIENT_ID,
        redirect_uri: 'http://localhost:3000/auth/google/callback',
        scope: [
            
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
        ].join(' '), // space seperated string

        response_type: 'code',
        access_type: 'offline',
        prompt: 'consent',
});

    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

    }

    async accessToken(code: any){

        const { data } = await axios({
            url: `https://oauth2.googleapis.com/token`,
            method: 'post',
            data: {
              client_id: GOOGLE_CLIENT_ID,
              client_secret: GOOGLE_CLIENT_SECRET,
              redirect_uri: 'http://localhost:3000/auth/google/callback',
              grant_type: 'authorization_code', code,
            },
          });
          console.log(data); // { access_token, expires_in, token_type, refresh_token }
          return data.access_token;

    }

    async googleGetUser(access_token: any){

        const { data } = await axios({
            url: 'https://www.googleapis.com/oauth2/v2/userinfo',
            method: 'get',
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          });
          console.log(data); // { id, email, given_name, family_name }
          return data;

    }
 
    */



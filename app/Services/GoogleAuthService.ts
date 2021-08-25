
import axios from 'axios';
import * as queryString from 'query-string';
import google from '../../config/google';
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = google;

import IAuthService from './IAuthService';
import TodoService from './TodoService';


class GoogleAuthService implements IAuthService {

    static generateCredentials(){

        GoogleAuthService.gooleAuthUrl;

        GoogleAuthService.accessToken;

        GoogleAuthService.googleGetUser;


    }


    static validateCredentials(){
        GoogleAuthService.parseCode();

    }



    static gooleAuthUrl () {
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

    static parseCode(){

        const urlParams = queryString.parse(location.search);
        if (urlParams.error) {
        console.log(`An error occurred: ${urlParams.error}`);
        } else {
        console.log(`The code is: ${urlParams.code}`);
        }


    }

    static async accessToken(code: any){

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

    static async googleGetUser(access_token: any){

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


    
}


export default GoogleAuthService;


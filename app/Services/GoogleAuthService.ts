
import axios from 'axios';
import * as queryString from 'query-string';
import google from '../../config/Google';
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = google;

import IAuthService from './IAuthService';


class GoogleAuthService implements IAuthService {

    generateCredentials() : void{

        this.gooleAuthUrl();
        this.accessToken();


    }


    validateCredentials(): void {
        const urlParams = queryString.parse(location.search);
        if (urlParams.error) {
        console.log(`An error occurred: ${urlParams.error}`);
        } else {
        console.log(`The code is: ${urlParams.code}`);
        }


    }



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
    
}

export default GoogleAuthService;


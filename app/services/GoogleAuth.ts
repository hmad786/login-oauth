import * as queryString from 'query-string';
import google from '../../config/google';
const {GOOGLE_CLIENT_ID} = google;

const stringifiedParams = queryString.stringify({
  client_id: GOOGLE_CLIENT_ID,
  redirect_uri: '/auth/google/callback',
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ].join(' '), // space seperated string
  response_type: 'code',
  access_type: 'offline',
  prompt: 'consent',
});

const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

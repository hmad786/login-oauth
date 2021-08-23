import axios from 'axios';
import google from '../../config/google';

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = google;

async function getAccessTokenFromCode(code: any) {
  const { data } = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: '/auth/google/callback',
      grant_type: 'authorization_code',
      code,
    },
  });
  console.log(data); // { access_token, expires_in, token_type, refresh_token }
  return data.access_token;
};
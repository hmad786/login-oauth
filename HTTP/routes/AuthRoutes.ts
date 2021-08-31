//import auth from '../Controllers/auth';
import AuthController from '../Controllers/AuthController';
import * as express from 'express';
import cookieParser from 'cookie-parser';
import querystring from "querystring";
import cors from 'cors';
const router = express.Router();
import Google from '../../config/Google';
import GoogleAuthService from '../../app/Services/GoogleAuthService';
const url = "https://oauth2.googleapis.com/token";
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, COOKIE_NAME, JWT_SECRET, SERVER_ROOT_URI, UI_ROOT_URI } = Google;


// Auth Routes...

router.get("/auth/google/url", AuthController.getLoginUrlController);

router.get("/auth/me", AuthController.getCurrentUserController);

router.get(`/${redirectURI}`, AuthController.userCodeController);

router.post(url, querystring.stringify(values), AuthController.getTokensController);

router.get(GoogleAuthService.googleUser,AuthController.userCodeController);



router.use( cors({ origin: UI_ROOT_URI, credentials: true, }));
  router.use(cookieParser());




//router.get('/', login.loginEnsureGuest);
//router.get('/log', login.loginEnsureAuth);

export default router;


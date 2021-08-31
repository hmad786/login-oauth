//import auth from '../Controllers/auth';
import AuthController from '../Controllers/AuthController';
import * as express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const router = express.Router();
import Google from '../../config/Google';
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, COOKIE_NAME, JWT_SECRET, SERVER_ROOT_URI, UI_ROOT_URI } = Google;


// Auth Routes...

router.get("/auth/google/url", AuthController.getLoginUrlController);

router.get("/auth/me", AuthController.getCurrentUserController);


router.use( cors({
      // Sets Access-Control-Allow-Origin to the UI URI
      origin: UI_ROOT_URI,
      // Sets Access-Control-Allow-Credentials to true
      credentials: true,
    })
  );
  router.use(cookieParser());




//router.get('/', login.loginEnsureGuest);
//router.get('/log', login.loginEnsureAuth);

export default router;


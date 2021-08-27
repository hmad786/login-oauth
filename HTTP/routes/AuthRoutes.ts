//import auth from '../Controllers/auth';
import AuthController from '../Controllers/AuthController';
import * as express from 'express';
const router = express.Router();



// Auth Routes...

router.get('/auth/me', AuthController.getLoginUrlController);


//router.get('/', login.loginEnsureGuest);
//router.get('/log', login.loginEnsureAuth);

export default router;


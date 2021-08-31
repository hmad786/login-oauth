//import auth from '../Controllers/auth';
const auth = require('../Controllers/authControllers');
import * as express from 'express';
const router = express.Router();



// Auth Routes...
router.get('/google', auth.authenticate);
router.get('/google/callback', auth.failureRedirect);
router.get('/logout', auth.logout);


//router.get('/', login.loginEnsureGuest);
//router.get('/log', login.loginEnsureAuth);

export default router;


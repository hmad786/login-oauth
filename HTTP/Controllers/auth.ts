// Auth routes convert into controllers...
import express, {Request, Response} from "express";
import passport from'passport';
const router = express.Router();


router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }))


router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req: Request, res: Response) => {
    res.redirect('/log')
  }
)

router.get('/logout', (req: Request, res: Response) => {
  req.logout()
  res.redirect('/');
})

export {router};

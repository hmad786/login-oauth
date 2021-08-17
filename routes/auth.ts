import express, {Request, Response} from "express";

const passport = require('passport')
const router = express.Router()


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
  res.redirect('/')
})

//module.exports = router;

export {router};

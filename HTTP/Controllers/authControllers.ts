
import express, {Request, Response} from "express";
//import passport from'passport';
import User from '../../app/database/mysql/models/User';
const router = express.Router();

const authenticate = async (req: Request, res: Response) => {
User.authenticate('google', { scope: ['profile','email'] })
}

const failureRedirect = async (req: any, res: any) => {
  User.authenticate('google', { failureRedirect: '/' }),
  res.redirect('/log')
}

const logout = async (req: any, res: any) => {
  req.logout()
  res.redirect('/');
}

module.exports = {
  authenticate,
  failureRedirect,
  logout,
};

export {router};


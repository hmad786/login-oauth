
import express, {Request, Response} from "express";
//import passport from'passport';
import UserModel from '../../app/database/mysql/models/UserModel';
const router = express.Router();

const logout = async (req: any, res: any) => {
  req.logout()
  res.redirect('/');
}

module.exports = {
  logout,
};

export {router};



import express, {Request, Response} from "express";
const router = require('express').Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const loginEnsureGuest = async (_req: Request, res: Response) => {
    return res.render('login',
    {
        layout: 'login'
    });
}

const loginEnsureAuth = async (req: Request, res: Response) => {
   return res.render('index',{userinfo:req.user})
}

module.exports = {
    loginEnsureGuest,
    loginEnsureAuth,
  };

export {router};
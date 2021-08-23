// index routes do convert into controllers...
import express, {Request, Response} from "express";
const router = require('express').Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

router.get('/', ensureGuest ,(req: Request, res: Response) => {
res.render('login',
{
    layout: 'login'

});
})

router.get("/log",ensureAuth, async(req: Request, res: Response)=>{
    res.render('index',{userinfo:req.user})
    })
    module.exports=router;
    export {router};
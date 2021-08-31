import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(cookieParser())
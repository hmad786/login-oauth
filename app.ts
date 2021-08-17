import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from "dotenv";
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import {  Sequelize } from 'sequelize';
import * as sequelize from "sequelize";
//import {UserFactory} from "./models/sql_user";
import {router} from "./routes";

const app  = express();
dotenv.config();
const PORT = process.env.PORT||3000;
dotenv.config({ path: './config/config.env' });


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})



// Passport config
require('./config/passport')(passport);
//from './config/passport' passport;

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine','ejs');

app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongooseConnection: mongoose.connection }),
    })
  );


  // Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("./routes/index", router);
app.use('/auth', router);

app.listen(process.env.PORT, () => {
  console.log("Server started running at", PORT);
  });

export default app;
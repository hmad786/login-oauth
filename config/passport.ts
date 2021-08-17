// import all the things we need  
import * as dotenv from "dotenv";
dotenv.config();
dotenv.config({ path: './config/config.env' });

//import GoogleStrategy from 'passport-google-oauth20';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import User from '../models/User';
// sql_user from '../models/sql_user';

module.exports = function (passport: { use: (arg0: any) => void; serializeUser: (arg0: (user: any, done: any) => void) => void; deserializeUser: (arg0: (id: any, done: any) => void) => void; }) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken: any, refreshToken: any, profile: { id: any; displayName: any; name: { givenName: any; familyName: any; }; photos: { value: any; }[]; emails: { value: any; }[]; }, done: (arg0: null, arg1: any) => void) => {
        //get the user data from google 
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
          email: profile.emails[0].value
        }

        try {
          //find the user in our database 
          let user = await User.findOne({ googleId: profile.id })

          if (user) {
            //If user present in our database.
            done(null, user)
          } else {
            // if user is not preset in our database save user data to database.
            user = await User.create(newUser)
            done(null, user)
          }
        } catch (err) {
          console.error(err)
        }
      }
    )
  )

  // used to serialize the user for the session
  passport.serializeUser((user: { id: any; }, done: (arg0: null, arg1: any) => void) => {
    done(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser((id: any, done: (arg0: any, arg1: any) => any) => {
    User.findById(id, (err: any, user: any) => done(err, user))
  })
}
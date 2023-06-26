import dotenv from "dotenv";
dotenv.config(); 
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from "../database/database.js";


passport.serializeUser((user, cb) => {
    // console.log("Serializing user:", user);
    cb(null, user.id);
  });
  
passport.deserializeUser(async (id, cb) => {
  const user = await User.findOne({ where: { id } }).catch((err) => {
    console.log("Error deserializing", err);
    cb(err, null);
  });

  // console.log("DeSerialized user", user);

  if (user) cb(null, user);
});
 
  
// const GOOGLE_CALLBACK_URL = "http://localhost:5000/auth/google/callback";
const GOOGLE_CALLBACK_URL = "/auth/google/callback";
  
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL,
    passReqToCallback: true,
  },
  async (req, accessToken, refreshToken, profile, cb) => {
  
  await User.findOrCreate({
    fullName: `${profile.name.givenName} ${profile.name.familyName}`,
    email: profile.emails[0].value,
    picture: profile.photos[0].value,
    googleId: profile.id,
  }, (err, user) => {
    return cb(err, user);
  });
}));

export default GOOGLE_CALLBACK_URL;
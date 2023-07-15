import dotenv from "dotenv";
dotenv.config(); 
import express from "express";
// import mongoose from "mongoose";
import session from 'express-session';
import passport from 'passport';
import cors from "cors";
import MongoStore from "connect-mongo";
import axios from "axios";
import _ from "lodash";
import path from "path";

// import telegram from "./src/telegram/bot.js";
import { isUserAuthenticated } from "./src/middleware/auth.js";
import { User, Library } from './src/database/database.js';
import "./src/passport/passport.js";



const app = express();
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production")
{
  app.use(express.static(path.resolve(__dirname, "./client/build")));
}




// Database connection for Session management
const dbUri = process.env.MONGODB_URI;
const sessionStore = MongoStore.create({
  mongoUrl: dbUri,
  collectionName: 'sessions'
});

app.use(session({
  store: sessionStore,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

app.use(passport.initialize());
app.use(passport.session());


// Telegram bot for Contact us page
// app.post("/contact", function(req, res) {
//   telegram.sendMessage(
//     process.env.MY_ID,
//     `Name: ${req.body.Name} \nEmail: ${req.body.Email}\nMessage: ${req.body.Message}`,
//   );
// });


// Authentication Section
app.get("/login/google", 
  passport.authenticate("google", {scope: ['profile', 'email'], prompt : "select_account" })
);

app.get("/auth/google/callback", 
  passport.authenticate('google', 
  { 
    //  successRedirect: "http://localhost:5000",
     failureRedirect: "http://localhost:5000" 
  }
  )    
);

app.get("/auth/user", isUserAuthenticated, async (req, res) => { 
  // Current user is: req.session.passport.user
 const data = await User.find({ _id: req.session.passport.user });
  res.json(data);
});

app.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.clearCookie("connect.sid");
});



// temporarily saving to library->all array
// app.post("/library", isUserAuthenticated, async (req, res) => {
//   const filter = {user: req.session.passport.user};
//   const update = {$push: { library: { allAnime: req.body.libLink }}};
//   const options = { new: true, upsert: true };
//   const response = await Library.findOneAndUpdate( filter, update, options);
//   res.json(response);                                
// });

// app.get("/get-library", isUserAuthenticated, async (req, res) => {
  //   await Library.find({user: req.session.passport.user}).then(async (data) => {
    //   const response = await data[0]?.library.allAnime;
    //   const ids = response?.join();
    //   console.log(data);
    //   const getLib = await axios.get(`https://kitsu.io/api/edge/anime?filter%5Bid%5D=${ids}&page%5Blimit%5D=20`);
    //   res.json(getLib.data);
    //   });
    // });
    
// Library Section
app.post("/library", isUserAuthenticated, async (req, res) => {
  const libLink = req.body.libLink;
  const libName = _.camelCase(req.body.libName);

  const filter = {user: req.session.passport.user};
  const update = {$push: { [libName]: libLink, allAnime: libLink}}
  const options = { new: true, upsert: true };
  await Library.findOneAndUpdate(filter, update, options);
});

app.get("/get-library/:libraryId", isUserAuthenticated, async (req, res) => {
  const libraryId = _.camelCase(req.params.libraryId);
  await Library.find({user: req.session.passport.user}).then(async (data) => {
  const response = await data[0]?.[libraryId];
  const ids = response?.join();
  const getLib = await axios.get(`https://kitsu.io/api/edge/anime?filter%5Bid%5D=${ids}&page%5Blimit%5D=20`);
  res.json(getLib.data);
  });
});

app.post("/rem-library", isUserAuthenticated, async (req, res) => {
  const libName = _.camelCase(req.body.libName);
  const libLink = req.body.libLink;

  const filter = {user: req.session.passport.user};
  const update = {$pullAll: {[libName]: [libLink], allAnime: [libLink]}}
  return await Library.updateOne(filter, update);
});

if(process.env.NODE_ENV === "production")
{
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, () =>  {
  console.log("Server started on port 5000.");
});

require('dotenv').config(); 
const express = require("express");
const mongoose = require("mongoose");
main().catch(err => console.log(err));
const session = require('express-session');
const passport = require('passport');
const cors = require("cors");
const MongoStore = require("connect-mongo");

const telegram = require("./src/telegram/bot");
const { isUserAuthenticated } = require("./src/middleware/auth");
const User = require('./src/database/database');
require("./src/passport/passport");



const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());


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
app.post("/contact", function(req, res) {
  telegram.sendMessage(
    process.env.MY_ID,
    `Name: ${req.body.Name} \nEmail: ${req.body.Email}\nMessage: ${req.body.Message}`,
  );
});


async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
};


app.get("/", (req, res) => {
    res.send("<a href='/login/google'>google</a>");
  });

app.get("/login/google", 
  passport.authenticate("google", {scope: ['profile', 'email'], prompt : "select_account" })
);

app.get("/auth/google/callback", 
  passport.authenticate('google', { 
     successRedirect: "http://localhost:3000/login/success",
     failureRedirect: "http://localhost:3000/login/error" 
    }),    
  (req, res) => { res.send('Thanks for signing in!') }
);

app.get("/auth/user", isUserAuthenticated, async (req, res) => { 
  // Current user is: req.session.passport.user
 const data = await User.find({ _id: req.session.passport.user });
  res.json(data);
});

app.post('/logout', function(req, res){
  req.logout();
  req.session.destroy();
  res.clearCookie("connect.sid");
});


app.listen(5000, function(){
  console.log("Server started on port 5000.");
});

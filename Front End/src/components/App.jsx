import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
// import Home from "./pages/Home";
import Contact from "../pages/Contact";
import Explore from "../pages/Explore";
import Animecard from "../pages/Animecard";
import Categorycard from "../pages/Categorycard";
import Query from "../pages/Query";
import Register from "../pages/Register";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import { LoginSuccess } from "../pages/LoginSuccess";
import { UserContext } from "./UserContext";


export default function App() {
    const [user, setUser] = useState("");
    const fetchUser = async () => {
        const response = await axios.get("http://localhost:5000/auth/user", { withCredentials: true }).catch(err => {
          console.log("Not authenticatedd properly");
          setUser(response.data[0])
        });
        if(response && response.data){
          console.log("User: ", response.data[0]);
        }
      }
      fetchUser();
    return (
        <BrowserRouter>
    <Header />
    <UserContext.Provider value={user}>
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="contact" element={<Contact />} />
      <Route path="explore" element={<Explore />} />
      <Route path="anime/:animeId" element={<Animecard />} />
      <Route path="category/:categoryId" element={<Categorycard />} />
      <Route path="query/:queryId" element={<Query />} />
      <Route path="register" element={<Register />} />
      <Route path="/login/success" element={<LoginSuccess />} />
      <Route path="/login/error">Error logging in, Please try again later!</Route>
      
    {/* <Route path="about" element={<About />} /> */}
    </Routes>
    </UserContext.Provider>
    <Footer />
    
    </BrowserRouter>
    )
}
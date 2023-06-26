import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import UserProvider from "./UserContext";
import Library from "../pages/Library";
import List from "./List";


function App() {

  return (
    <BrowserRouter>
    <UserProvider>
    <Header />
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="contact" element={<Contact />} />
      <Route path="explore" element={<Explore />} />
      <Route path="anime/:animeId" element={<Animecard />} />
      <Route path="category/:categoryId" element={<Categorycard />} />
      <Route path="query/:queryId" element={<Query />} />
      {/* <Route path="register" element={<Register />} /> */}
      <Route path="/login/success" element={<LoginSuccess />} />
      <Route path="/login/error">Error logging in, Please try again later!</Route>
      {/* <Route path="/library/:libraryId" element={<Library />} /> */}
      <Route path="/library" element={<Library />} />
      // one which will be displaying anime from view more link 
      <Route path="/:listId" element={<List />} />
    </Routes>
    </UserProvider>
    <Footer />
    </BrowserRouter>
    )
}
export default (App);
// export default App;
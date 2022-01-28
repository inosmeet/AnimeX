import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import Animecard from "./pages/Animecard";
import Categorycard from "./pages/Categorycard";
import Query from "./pages/Query";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="explore" element={<Explore />} />
      <Route path="anime/:animeId" element={<Animecard />} />
      <Route path="category/:categoryId" element={<Categorycard />} />
      <Route path="query/:queryId" element={<Query />} />
      
    {/* <Route path="about" element={<About />} /> */}
    </Routes>
    <Footer />
    </BrowserRouter>,
   rootElement);


import React from "react";
import Leftchild from "../components/Leftchild";
import Rightchild from "../components/Rightchild";


function Explore(){
    document.title = "Explore Anime | AnimeX";
    return (
      <div className="sidebar-parent">

      <Leftchild />
      <Rightchild />
      <div className="description">
      <h3 className="description-title">Description</h3>
      <span></span>
      </div>

      </div>
    )
}

export default Explore;
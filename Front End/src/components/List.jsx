//! this is the component that will be used to display more anime from explore page animes

import { useParams } from "react-router-dom";
import Leftchild from "./Leftchild";
import Expanime from "./Expanime";
import { useState } from "react";


export default function List() {
  const [page, setPage] = useState(0);
  let api = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&sort=-user_count&page%5Boffset%5D=${page}`;
  const params = useParams();
  document.title = "AnimeX";
  
  return (
    <div className="sidebar-parent">
      <Leftchild />

      <div className="right-child">
      <h2 className="explore-title capitalize">{params.listId}</h2>
        <Expanime api={api} 
          onQuery={true}
        />
      </div>

      <div className="description invisible">
        <h3 className="description-title"></h3>
        <span></span>
      </div>
    </div>
  )
}

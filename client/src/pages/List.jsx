//! this is the component that will be used to display more anime from explore page animes

import { useParams } from "react-router-dom";
import Leftchild from "../components/Leftchild";
import Expanime from "../components/Expanime";
import { useState } from "react";

export default function List() {
  const [page, setPage] = useState(0);
  let api;
  const params = useParams();

  const viewMoreApiTitle = params.listId;
  // console.log(viewMoreApiTitle);
  document.title = `${viewMoreApiTitle} | AnimeX`;

  switch (viewMoreApiTitle) {
    case "Trending This Week":
      api = `https://kitsu.io/api/edge/trending/anime?limit=20&page%5Boffset%5D=${page}`;
      break;
    case "Top Airing Anime":
      api = `https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=20&sort=-user_count&page%5Boffset%5D=${page}`;
      break;
    case "Top Upcoming Anime":
      api=`https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=20&sort=-user_count&page%5Boffset%5D=${page}`
      break;
    case "Highest Rated Anime":
      api = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&sort=-average_rating&page%5Boffset%5D=${page}`;
      break;
    case "Most Popular Anime":
      api = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&sort=-user_count&page%5Boffset%5D=${page}`;
      break;
    default:
      api = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&sort=-user_count&page%5Boffset%5D=${page}`;
  }

  return (
    <div className="sidebar-parent">
      <Leftchild />

      <div className="right-child">
        <h2 className="explore-title capitalize">{params.listId}</h2>
        <Expanime api={api} onQuery={true} />
      </div>

      {/*! doing this is making whole orientation of right child go down */}
      {/* <div className="description invisible">
        <h3 className="description-title"></h3>
        <span></span>
      </div> */}
    </div>
  );
}

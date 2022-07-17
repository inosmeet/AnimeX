import { useParams } from "react-router-dom";
import Leftchild from "./Leftchild";
import Expanime from "./Expanime";
import useFetch from "./useFetch";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from "react";


export default function List() {
  const [page, setPage] = useState(0);
  let api = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&sort=-user_count&page%5Boffset%5D=${page}`;
  const params = useParams();
  document.title = "AnimeX";

  
  // switch (params.listId) {
  //   case "Most Popular Anime":
  //     api = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&sort=-user_count&page%5Boffset%5D=${page}`;
  //   break;
    
  //   case "Highest Rated Anime":
  //     api = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&sort=-average_rating`;
  //   break;

  //   case "Top Upcoming Anime":
  //     api = `https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=20&sort=-user_count`;
  //   break;
    
  //   case "Top Airing Anime":
  //     api = `https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=20&sort=-user_count`;
  //   break;

  //   case "Trending This Week":
  //     api = `https://kitsu.io/api/edge/trending/anime?limit=20`;
  //   break;
  // }
  
  
  return (
    <div className="sidebar-parent">
      <Leftchild />

      <div className="right-child">
      <h2 className="explore-title capitalize">{params.listId}</h2>
      <InfiniteScroll 
        dataLength={1000} 
        next={() => setPage(page + 20)} 
        hasMore={true}
        loader={<h4>Loading...</h4>}  
      >
        <Expanime api={api} />
      </InfiniteScroll>
      </div>

      <div className="description invisible">
        <h3 className="description-title"></h3>
        <span></span>
      </div>
    </div>
  )
}

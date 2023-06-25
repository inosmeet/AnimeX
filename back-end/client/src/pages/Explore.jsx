import Leftchild from "../components/Leftchild";
import Expanime from "../components/Expanime";

export default function Explore() {
  document.title = "Explore Anime | AnimeX";
  return (
    <div className="sidebar-parent">
      <Leftchild />
      <div className="right-child">
        <h2 className="explore-title">Explore Anime</h2>

        <Expanime
          title="Trending This Week"
          api="https://kitsu.io/api/edge/trending/anime?limit=5"
          viewMore={true}
        />
        <Expanime
          title="Top Airing Anime"
          api="https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count"
          viewMore={true}
        />
        <Expanime
          title="Top Upcoming Anime"
          api="https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count"
          viewMore={true}
        />
        <Expanime
          title="Highest Rated Anime"
          api="https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating"
          viewMore={true}
        />
        <Expanime
          title="Most Popular Anime"
          api="https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count"
          viewMore={true}
        />
      </div>

      {/* <div className="description invisible">
        <h3 className="description-title">Description</h3>
        <span></span>
      </div> */}
    </div>
  );
}

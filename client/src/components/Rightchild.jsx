import Expanime from "./Expanime";

export default function Rightchild() {

    return (
        <div className="right-child">
        <h2 className="explore-title">Explore Anime</h2>
        
        <Expanime 
          title="Trending This Week"
          api="https://kitsu.io/api/edge/trending/anime?limit=5"
        />
        <Expanime 
          title="Top Airing Anime"
          api="https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count"
        />
        <Expanime 
          title="Top Upcoming Anime"
          api="https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count"
        />
        <Expanime 
          title="Highest Rated Anime"
          api="https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating"
        />
        <Expanime 
          title="Most Popular Anime"
          api="https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count"
        />

      </div>
    )
}
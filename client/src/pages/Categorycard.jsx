import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Leftchild from "../components/Leftchild";
import Expanime from "../components/Expanime";
import useCountRender from "../components/useCountRender";

function Categorycard() {
  const [isClicked, setIsClicked] = useState(false);
  const [description, setDescription] = useState("");
  const isCurrent = useRef(true);
  const params = useParams();

  const [data, setData] = useState("");

  // useCountRender("Category ");
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(async () => {
    const response = await axios.get(
      `https://kitsu.io/api/edge/categories?filter%5Bslug%5D=${params.categoryId}`
    );
    document.title = `${response.data.data[0].attributes.title} Anime | AnimeX`;

    if (isCurrent.current) {
      setData(response.data.data[0].attributes.title);
      setDescription(response.data.data[0].attributes.description);
    }
  }, [params.categoryId]);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="sidebar-parent">
      <Leftchild />

      <div className="right-child">
        <h2 className="explore-title">{data} Anime</h2>
        <Expanime
          title={"Newly Released " + data + " Anime"}
          api={`https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&filter%5Bcategories%5D=${params.categoryId}&page%5Blimit%5D=20&sort=-start_date`}
        />
        <Expanime
          title={"Trending " + data + " Anime"}
          api={`https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${params.categoryId}&page%5Blimit%5D=20&sort=-average_rating`}
        />
        <Expanime
          title={"Most Popular " + data + " Anime"}
          api={`https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${params.categoryId}&page%5Blimit%5D=20&sort=-user_count`}
        />
      </div>
      {/* <div className="description">
    <h3 className="description-title">Description</h3>

    { description.length < 150 ? <span>{description}</span> :
      (isClicked ? 
    <span>
      {description}
      <button style={{"border": "none", "backgroundColor": "white", "color": "red"}} onClick={handleClick}>...Read Less</button>
    </span> :
    <span>
      {description.slice(0, 150) + "..."}
      <button style={{"border": "none", "backgroundColor": "white", "color": "red"}} onClick={handleClick}>Read More</button>
    </span>)
    }
    
        </div> */}
    </div>
  );
}

export default Categorycard;

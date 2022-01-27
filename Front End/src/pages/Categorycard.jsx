import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Leftchild from "../components/Leftchild";
import Expanime from "../components/Expanime";


function Categorycard() {
    const [e,f] = useState("");
    const [description, setDescription] = useState();
    let params = useParams();
    useEffect(() => {
    async function a() {
        const response = await axios.get(`https://kitsu.io/api/edge/categories?filter%5Bslug%5D=${params.categoryId}` ); 
        const data = await response.data.data[0].attributes.title;
        document.title = `${response.data.data[0].attributes.title} Anime | AnimeX` ;
        const notFound = await response.data.data;



        f(data);
        setDescription(response.data.data[0].attributes.description);
    }
    a();
}, []);

    return (
         <div className="sidebar-parent">
         <Leftchild />
            
         <div className="right-child">
            <h2 className="explore-title">{e} Anime</h2>
            <Expanime 
            title={"Newly Released " + e + " Anime"}
            api={`https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&filter%5Bcategories%5D=${params.categoryId}&page%5Blimit%5D=20&sort=-start_date`}
            />
            <Expanime 
            title={"Trending " + e + " Anime"}
            api={`https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${params.categoryId}&page%5Blimit%5D=20&sort=-average_rating`}
            />
            <Expanime 
            title={"Most Popular " + e + " Anime"}
            api={`https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${params.categoryId}&page%5Blimit%5D=20&sort=-user_count`}
            />

      </div>
      <div className="description">
      <h3 className="description-title">Description</h3>
      <span>{description}</span>
      
         </div>
         </div>
        
    )
    
}

export default Categorycard;

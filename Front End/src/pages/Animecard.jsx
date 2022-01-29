import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Animecard() {
    const [e,f] = useState("");
    let params = useParams();
    const defaultImage = "https://kitsu.io/images/default_cover-22e5f56b17aeced6dc7f69c8d422a1ab.png";
    useEffect(() => {
    async function a() {
        const response = await axios.get("https://kitsu.io/api/edge/anime?filter%5Bslug%5D=" + params.animeId); 
        const data = response.data.data[0].attributes.coverImage;
        
      f(data);
        


        const title = await response.data.data[0].attributes.titles;
        if (title.en === undefined) {
            document.title = (`${title.en_jp} | AnimeX `);
        } else {
            document.title = (`${title.en} | AnimeX `);
        }
    }
    
a();
}, []); 

    return (
        <>
        {JSON.stringify(e)}
        {e === null ? <img src={defaultImage} className="mt-35 w-full blur-[1px]" /> :
        <img src={e.large} className="mt-35 w-full blur-[1px]" />
        }
        </>
    )
}

export default Animecard;
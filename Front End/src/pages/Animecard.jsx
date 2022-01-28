import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Animecard() {
    const [e,f] = useState("");
    let params = useParams();

    useEffect(() => {
    async function a() {
        const response = await axios.get("https://kitsu.io/api/edge/anime?filter%5Bslug%5D=" + params.animeId); 
        f(response);
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
        <>{JSON.stringify(e)}</>
    )
}

export default Animecard;
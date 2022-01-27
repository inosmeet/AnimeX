import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Animecard() {
    const [e,f] = useState("");
    let params = useParams();

    useEffect(() => {
    async function a() {
        const b = await axios.get("https://kitsu.io/api/edge/anime?filter%5Bslug%5D=" + params.animeId); 
        f(b);
        document.title = (`${b.data.data[0].attributes.titles.en_jp} | AnimeX `);
    }
    
a();
}, []); 
    
    return (
        <>{JSON.stringify(e)}</>
    )
}

export default Animecard;
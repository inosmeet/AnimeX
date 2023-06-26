import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [hasMore, setHasMore] = useState(false);
    const [links, setLinks] = useState("");
    const isCurrent = useRef(true);
    // useCountRender("useFetch ");

    useEffect(() => {
        return () => {
            isCurrent.current = false;
        }
    }, []);
    
    useEffect(async () => {
        const response = await axios.get(url);
        setLinks(await response.data.links?.next);
        if(isCurrent.current){
            setData(pv => [...pv, ...response.data.data]);
            // setHasMore(response.data.data.length > 0 );
            setLoading(false);
        }
    }, [url, setData, setLoading]);

    
     

  return { loading, data, setData, loader, links };
}

export default useFetch;
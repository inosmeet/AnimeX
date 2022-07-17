import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useCountRender from "./useCountRender";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
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
            setHasMore(response.data.data.length > 0 );
            setLoading(false);
        }
    }, [url, setData, setLoading, setHasMore]);

    
    function loader() {
        return (<div className="placeholder-div">
                <div className="placeholder-item"/>
                <div className="placeholder-item"/>
                <div className="placeholder-item"/>
                <div className="placeholder-item"/>
                <div className="placeholder-item"/> 
                </div>
            )
    }   

  return { loading, data, setData, loader, hasMore, links };
}

export default useFetch;
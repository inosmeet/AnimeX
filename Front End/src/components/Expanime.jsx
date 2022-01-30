import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

function Expanime(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    let style = {
      "borderRadius": "0.3rem",
      "animation": "fadeInAnimation ease 2s",
      "animationIterationCount": "1",
      "animationFillMode": "forwards" 
    };
    
    useEffect(() => {
      const loadData = async () => {
          
          setLoading(true);
          const response = await axios.get(props.api);
          const item = await response.data.data;
          setData(item);
          setLoading(false);
      }
      loadData();
  }, []);

  function abc() {
    return (<div className="placeholder-div">
    <div className="placeholder-item"/>
    <div className="placeholder-item"/>
    <div className="placeholder-item"/>
    <div className="placeholder-item"/>
    <div className="placeholder-item"/> 
  </div>)
  }
  
  

  return (
    <>
         <h6>{props.title}</h6> 
         <div className="explore">
         { loading ? (abc()) :
          (data.map((item, index) =>
          <div className="explore-img-parent" key={index}> 
          <OverlayTrigger
            placement="bottom"
            delay={150}
            overlay={
              <Tooltip id="tooltip-bottom">
                {item.attributes.slug}
              </Tooltip>
            }
            >
            <Link to={`/anime/${item.attributes.slug}`} 
            className="explore-img" 
            key={index}>
             <img 
                key={index}
                style={style}
                className="explore-img absolute" 
                alt="anime"
                src={item.attributes.posterImage.small}
              />
              <div className="bg-gradient-to-t hover:from-[#000000cc] hover:to-[#0000001a] hover:bg-opacity-50 hover:rounded-md h-full w-full relative" />
            </Link>
          </OverlayTrigger>

            </div>))
         }
          </div>
    </>
  )
}

export default Expanime;



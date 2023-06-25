import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ImgDiv from "./ImgDiv";

const Expanime = React.memo((props) => {
  const [reload, setReload] = useState(0);

  // const [data, setData] = useState([]);
  const data = useRef([]);
  const [loading, setLoading] = useState(true);
  const isCurrent = useRef(true);

  let page_offset = 21;

  const updateState = () => {
    setReload(Math.random());
  };
  const handleScroll = async () => {
    const windScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (windScroll / height) * 100;
    
    if (props.onQuery && scrolled > 50) {
      console.log("scrolling");
      window.removeEventListener("scroll", handleScroll);
      page_offset += 20;
      const response = await axios.get(
        props.api + "&page[offset]=" + page_offset.toString()
      );
      setTimeout(() => {
        data.current = data.current.concat(response.data.data);
        updateState();
      }, 1);
      window.addEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(async () => {
    load();
  }, [props.api]);

  async function load() {
    const response = await axios.get(props.api);
    setTimeout(() => {
      data.current = (response.data.data);
      updateState();
    }, 1);
    // setData(await response.data.data);
    setLoading(false);
  }

  function loader() {
    return (
      <div className="placeholder-div">
        <div className="placeholder-item" />
        <div className="placeholder-item" />
        <div className="placeholder-item" />
        <div className="placeholder-item" />
        <div className="placeholder-item" />
      </div>
    );
  }

  const EmptyData = () => {
    return <h5>Oops! There doesn't seem to be any data for this section.</h5>;
  };

  return (
    <>
      <h6>{props.title}</h6>
      <div className="explore flex flex-wrap gap-2 w-full margin-left ">
        {loading ? (
          loader()
        ) : data.current.length === 0 ? (
          <EmptyData />
        ) : (
          data.current.map((item, index) => {
            return <ImgDiv item={item} index={index} key={index} isLibrary={props.isLibrary ? true : false} />;
          })
        )}
        {props.viewMore ? 
        <Link to={`/${props.title}`}>view more</Link>
        : 
        null 
        }
      </div>
    </>
  );
});

export default Expanime;

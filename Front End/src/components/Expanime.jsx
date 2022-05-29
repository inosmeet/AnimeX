import { useEffect, useState, useRef, useCallback } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import useFetch from "./useFetch";
import InfiniteScroll from 'react-infinite-scroll-component';
// import useCountRender from "./useCountRender";

const Expanime = (props) => {
  const { data, loading, loader, hasMore, links } = useFetch(props.api);
  
  // const observer = useRef();
  // const lastElelmentRef = useCallback(node => {
  //   if(loading) return
  //   if(observer.current) observer.current.disconnect()
  //   observer.current = new IntersectionObserver(entries => {
  //     if(entries[0].isIntersecting) {
  //       console.log("Last");
  //       a();
  //     }
  //   })
  //   if(node) observer.current.observe(node)
  // }, [loading, hasMore]);

    
  // useCountRender("Expanime ");

  async function handleAddition(e){
    console.log(e.target.innerText);
    await axios.post("/library", {
      libLink: e.target.value,
      libName: e.target.innerText
    });
  };
  async function handleRemoval(e){
    console.log(e.target.innerText);
    await axios.post("/rem-library", {
      libLink: e.target.value,
      libName: e.target.asd
    });
  }

  const EmptyData = () => {
    return(<h5>Oops! There doesn't seem to be any data for this section.</h5>)
  }

  const ImgDiv = ({item, index}) => {
    return <div className="m-[0.5%]" key={index}>
    <div className="explore-img-parent">
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
      >
        <img 
          className="explore-img absolute" 
          alt="anime"
          src={item.attributes.posterImage.small}
        />
        <div className="bg-gradient-to-t hover:from-[#000000cc] hover:to-[#0000001a] hover:bg-opacity-50 hover:rounded-md h-full w-full relative" >
        {/* <button className="relative float-right opacity-0 hover:opacity-100 h-full w-full text-black border-none bg-inherit" 
          onClick={props.function ? handleRemoval : handleAddition } 
          value={item.id} asd={props.name}>
          <i className="fa fa-bookmark" aria-hidden="true"></i>
          </button> */}
        </div>
      </Link>
    </OverlayTrigger>
    
    </div>
    </div>
  }
  
  return (
    <>
      <h6>{props.title}</h6> 
      <div className="explore">
      { loading ? (loader()) :
      data.length === 0 ? <EmptyData /> :
     
      (data.map((item, index) => 
      {return <ImgDiv item={item} index={index} key={index} />} 
        
      ))
      }
      <Link to={`/${props.title}`}>view more</Link>
      </div>
    </>
  )
}

export default Expanime;



{/* <div className="m-[0.5%]" key={index}> 
      <ImgDiv item={item}/>
      <button onClick={props.function ? handleRemoval : handleAddition } value={item.id}>{props.function ? props.name : "dropped" }</button>
  </div> */}
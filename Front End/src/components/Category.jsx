import { Collapse } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useCountRender from "./useCountRender";


export default function SidebarBtn(props) {

  const isCurrent = useRef(true);
  const links = useRef([]);
  const [open, setOpen] = useState(false);

  // useCountRender("Category ");
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    }
  }, []);
  
  useEffect(() => {
    axios.get(props.api)
      .then(response => response.data.data)
      .then(data => {
        if(isCurrent.current) {
          links.current = data
        }
      })
  }, [props.api]);

  const InsideBtn = () => {
    return(
      links.current.map((item, i) => 
      <ul key={i} className="list-unstyled mb-0">
        <li className="mb-1">
          <Link to={`/category/${item.attributes.slug}`} >
            <button className="btn inside-btn" >{item.attributes.slug}</button>
          </Link>
        </li>
      </ul>)
    )
  }
  

  return (
      
    <div className="sidebar">
      <ul className="list-unstyled mb-0">
      <li className="mb-1">
        <button 
        onClick={() => {setOpen(!open)}}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="toggle-button btn outside-btn"
      >
        <i className="fas fa-chevron-right aero-icon" /> {props.title}
      </button>

      <Collapse in={open}>
        <div id="example-collapse-text">
        <InsideBtn />
        </div>
      </Collapse>

      </li>
      </ul>
    </div>
  );
}
  
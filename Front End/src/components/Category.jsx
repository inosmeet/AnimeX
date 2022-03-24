import { Collapse } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function SidebarBtn(props) {
    const [open, setOpen] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [catgo, setCatgo] = useState([]);
    
    useEffect(() => {
      const loadImage = async () => {
        // let isMounted = true;
          
          // setLoading(true);

          const response = await axios.get(props.api);
          const data = await response.data.data;
          setCatgo(data);
          
          // setLoading(false);
      }
      loadImage();
  }, [props.api]);



  function handleClick() {
    setTimeout(() => {window.location.reload(false)}, 0)
  }


    return (
        
      <div className="sidebar">
        <ul className="list-unstyled mb-0">
        <li className="mb-1">
          <button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="toggle-button btn outside-btn"
        >
         <i className="fas fa-chevron-right aero-icon" /> {props.title}
        </button>
        <Collapse in={open}>
          <div id="example-collapse-text">
          {catgo.map((item, index) => {
            return (<ul key={index} className="list-unstyled mb-0">
                      <li className="mb-1">
                      <Link to={`/category/${item.attributes.slug}`}>
                         <button className="btn inside-btn " onClick={handleClick} >{item.attributes.slug}</button>
                            </Link>
                      </li>
                      </ul>)
                    })}
          </div>
        </Collapse>

        </li>
        </ul>
      </div>
    );
  }

  

  
  
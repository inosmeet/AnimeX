
import { Link, useNavigate } from "react-router-dom";


function Header() {
  let navigate = useNavigate();
  function search(e){
    if(e.key === "Enter"){
      e.preventDefault();
     navigate(`/query/${e.target.value}`);
     setTimeout(() => {window.location.reload(false)}, 0);
    }
  }
  
  return (
    <div className="nav-fix">
      <nav className="navbar navbar-dark  ">
        <div className="container-fluid">
          <div className="zoom ">
          <Link to="/" className="navbar-brand">
            <img
            className="logo"
            src="../images/logo1.png"
            alt="animex-logo"
            border="0"
            height="24"
            width=""
            />
          </Link>
          </div>
          <ul className="nav navlink-div">
            <li className="nav-item">
            <Link to="/" className="header-link nav-link">
              Home
            </Link>
            </li>
            <li className="nav-item">
             <Link to="/explore" className="header-link nav-link">
              Explore
            </Link>
            </li>
            
            <li className="nav-item">
              <a className="nav-link header-link" href="#">
                Library
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link header-link" href="#" aria-disabled="true">
                Categories
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link header-link" href="https://github.com/Dev-Voldemort/Animex" aria-disabled="true">
                GitHub
              </a>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2 search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onKeyDown={search}
            />

            <Link to="/register" className="nav-link active register header-link" aria-current="page" >
              Register
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;

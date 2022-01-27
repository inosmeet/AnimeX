
import { Link, Outlet } from "react-router-dom";


function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="center">
        <div className="link center">
        <Link to="/contact" className="footer-link nav-link">
          Contact
        </Link>
        <Link to="/about" className="footer-link nav-link">
          About Us
        </Link>
        <Outlet />
          {/* <a className="footer-link nav-link" href="">
            Contact
          </a> */}
          {/* <a className="footer-link nav-link" href="">
            About Us
          </a> */}
        </div>
        <div className="copy center">
          <p>Copyright ⓒ {year}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

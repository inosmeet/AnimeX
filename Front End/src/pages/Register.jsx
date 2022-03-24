import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";


export default function Register() {
  const msg = useContext(UserContext);
    let navigate = useNavigate();

    function handleClick(){
      let timer: NodeJS.Timeout | null = null;
      const url = "http://localhost:5000/login/google"
      const newWindow = window.open(
        url, 
        "_blank", 
        "width=500,height=600"
        );
        
        if(newWindow){
          timer = setInterval(() => {
            if(newWindow.closed){
              console.log("Authenticated");
              
              if(timer) clearInterval(timer);
            }
          }, 500)
        }
    }
    function handleLogout(){
      axios.post('logout');
    }
    return <footer>
    <a onClick={handleClick} href="" style={{ "marginTop": "200px", "position": "absolute" }}>Google</a>
    <a onClick={handleLogout} href="" style={{ "marginTop": "250px", "position": "absolute" }} >Logout</a>
    </footer>
}
import { useNavigate } from "react-router-dom";

export default function Register() {  

let navigate = useNavigate();
  
async function handleClick(){
  let timer: NodeJS.Timeout | null = null;
  const url = "http://localhost:5000/login/google";

  function createPopupWin(pageURL, popupWinWidth, popupWinHeight) {
    var left = (screen.width - popupWinWidth) / 2;
    var top = (screen.height - popupWinHeight) / 4;

    var myWindow = window.open(pageURL, "_blank",
      'resizable=yes, width=' + popupWinWidth
      + ', height=' + popupWinHeight + ', top='
      + top + ', left=' + left);
    
    if(myWindow){
      timer = setInterval(() => {
        if(myWindow.closed){
          navigate("/explore");
          console.log("Authenticated");
          
          if(timer) clearInterval(timer);
        }
      }, 500)
    }
  }
  createPopupWin(url, 500, 600);
} 
 
  return <div className="card-body ">
    <a className="btn btn-block btn-social absolute top-0 bottom-0 left-0 right-0 m-auto h-fit" onClick={handleClick} role="button">
      <i className="fab fa-google"></i>
      Sign Up with Google
    </a>
  </div>
}
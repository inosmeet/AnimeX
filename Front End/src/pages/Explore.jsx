import Leftchild from "../components/Leftchild";
import Rightchild from "../components/Rightchild";


export default function Explore(){
  document.title = "Explore Anime | AnimeX";
  return (
    <div className="sidebar-parent">
      <Leftchild />
      <Rightchild />

      <div className="description invisible">
        <h3 className="description-title">Description</h3>
        <span></span>
      </div>

    </div>
  )
}


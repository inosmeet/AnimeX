import Leftchild from '../components/Leftchild';
import Expanime from '../components/Expanime';
import LibraryList from '../components/LibraryList';
import { useParams } from "react-router-dom";

export default function Library() {
  const params = useParams();
  document.title = "Library | AnimeX";
  const title = params.libraryId.charAt(0).toUpperCase() + params.libraryId.slice(1);
  return ( 
    <div className="sidebar-parent">
      <Leftchild />
      <div className="right-child">
        <h2 className="explore-title">{title}</h2>

        <Expanime 
          api={`/get-library/${params.libraryId}`}
          function="handleRemoval"
          name={title}
        /> 
        
      </div>

      <div className="description">
        <LibraryList />
      </div>  
       
    </div> 
  )
}

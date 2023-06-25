import Leftchild from '../components/Leftchild';
import Expanime from '../components/Expanime';
import { useState } from 'react';

export default function Library() {
  let [lib, setLib] = useState('all-anime');
  let api = api=`/get-library/${lib}`;
  document.title = "Library | AnimeX";
  const title = lib.charAt(0).toUpperCase() + lib.slice(1);


  return ( 
    <div className="sidebar-parent">
      <Leftchild />
      <div className="right-child">
        <h2 className="explore-title">{title}</h2>

        <Expanime 
          api={`/get-library/${lib}`}
          isLibrary={true}
          viewMore={false}
          name={title}
        /> 
        
      </div>

      <div className="description">
        <h3 className="description-title">Libraries</h3>
        <button className="block btn" onClick={() => {setLib('all-anime')}}>All Anime</button>
        <button className="block btn" onClick={() => {setLib('currently-watching')}}>Currently Watching</button>
        <button className="block btn" onClick={() => {setLib('want-to-watch')}}>Want to Watch</button>
        <button className="block btn" onClick={() => {setLib('completed')}}>Completed</button>
        <button className="block btn" onClick={() => {setLib('on-hold')}}>On Hold</button>
        <button className="block btn" onClick={() => {setLib('dropped')}}>Dropped</button>
      </div>  
       
    </div> 
  )
}

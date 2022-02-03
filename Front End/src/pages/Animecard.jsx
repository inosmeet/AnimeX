import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function Animecard() {
    const [isClicked, setIsClicked] = useState(false);
    const [e,f] = useState([]);
    const [include ,setInclude] = useState([]);
    let params = useParams();
    const defaultImage = "https://kitsu.io/images/default_cover-22e5f56b17aeced6dc7f69c8d422a1ab.png";
    useEffect(() => {
    async function a() {
        const response = await axios.get("https://kitsu.io/api/edge/anime?fields%5Bcategories%5D=slug%2Ctitle&filter%5Bslug%5D="+params.animeId+"&include=categories"); 
        const data = await response.data.data;
        const data2 = await response.data.included;

      setInclude(data2);
      f(data);
        


        const title = await response.data.data[0].attributes.titles;
        if (title.en === undefined) {
            document.title = (`${title.en_jp} | AnimeX `);
        } else {
            document.title = (`${title.en} | AnimeX `);
        }
    }
    
a();
}, []); 


function handleClick() {
    setIsClicked(!isClicked);
}

    return (
    <>
      {
          e.map((item, index) => {
             return (<div key={index} className="grid grid-cols-6  h-screen grid-rows-4">
                <div className="cover-img absolute col-span-6 w-full ">
                    {item.attributes.coverImage === null ? 
                        <img src={defaultImage} className="h-[450px] w-[inherit] object-cover absolute" /> 
                        : 
                        <img src={item.attributes.coverImage.original} className="h-[450px] w-[inherit] object-cover absolute" />
                    }
                    <div className="bg-gradient-to-t from-[#000000cc] to-[#0000001a] relative h-[450px] w-[inherit]" />
                </div>
                
                <div className="poster-img  sticky col-start-2 row-start-1 ">
                    
                    <img src={item.attributes.posterImage.original}
                      className="h-[426px] w-[286px] absolute rounded-md object-cover  "
                     />
                    <div className="bg-gradient-to-t from-[#000000cc] to-[#0000001a] relative h-[426px] w-[286px] rounded-md" />
                  
                </div>
                
                <div className="info-title relative block col-start-3 row-start-2 col-span-full ">
                    
                    
                   
                     <span className="inline font-bold opacity-95 leading-none text-[60px] text-[#fff]" style={{"textTransform": "capitalize"}}>{item.attributes.slug}</span>

                    <span className="text-[30px] text-[white] opacity-75 font-bold ml-[2%]">{item.attributes.startDate.slice(0, 4)}</span>
                   
                    <span className="text-[#1abc9c] block font-bold mt-[2%] ">{item.attributes.averageRating + "% Community Approval"}</span>
                    </div>


                    <div className="info-description relative col-start-3 row-start-3 col-span-2 "> 
                    { item.attributes.description.length < 300 ? <p className="whitespace-pre-line">{item.attributes.description}</p> :
                     (isClicked ? 
                   <p className="whitespace-pre-line">
                     {item.attributes.description}
                     <button style={{"border": "none", "backgroundColor": "white", "color": "red"}} onClick={handleClick}>...Read Less</button>
                   </p> :
                   <p className="whitespace-pre-line">
                     {item.attributes.description.slice(0, 300) + "..."}
                     <button style={{"border": "none", "backgroundColor": "white", "color": "red"}} onClick={handleClick}>Read More</button>
                   </p>)
                   }
                  {include.map((link, ind) => { 
                    return  <div key={ind} className="inline mt-3 col-span-2">

                     <Link to={"/category/" + link.attributes.slug} 
                    className=" bg-white mt-1 inline-block border-[1px] leading-5 pl-[4px] pr-[4px] ml-[4px] mr-[4px] no-underline text-[#464646] rounded-[3px] object-fill ">
                    {link.attributes.title}
                    </Link>  
                    
                  </div>
                  })}





                   <hr />
                   <div className="h-[30px]">
                   <a href="#" className="text-[#464646] no-underline hover:text-[#464646] float-left">{"❤ Rank #" + item.attributes.popularityRank + " (Most Popular Anime)"}</a>
                   <a href="#" className="text-[#464646] no-underline hover:text-[#464646] float-right">{"⭐ Rank #" + item.attributes.ratingRank + " (Highest Rated Anime)"}</a>
                   </div>
                   <hr />
                   </div>

                  <div className="anime-details ml-5 relative col-start-5 row-span-1 row-start-3 w-full bg-white h-full rounded-md">
                  <div className="mt-3">
                   <h5 className="ml-5">Anime Details</h5>
                   <table className="info-table ml-2 border-separate">
                     <tbody>
                       <tr>
                       <td className="font-bold">Episodes</td>
                       <td className="font-medium">{item.attributes.episodeCount === null ? "-" : item.attributes.episodeCount}</td>
                       </tr>
                       <tr>
                       <td className="font-bold">Status</td>
                       <td className="font-medium">{item.attributes.status === null ? "-" : item.attributes.status}</td>
                       </tr>
                       <tr>
                       <td className="font-bold">Season</td>
                       <td className="font-medium">asd</td>
                       </tr>
                       <tr>
                       <td className="font-bold">Age Rating</td>
                       <td className="font-medium">{item.attributes.ageRating + " - " + item.attributes.ageRatingGuide}</td>
                       </tr>
                       <tr>
                       <td className="font-bold">Length</td>
                       <td className="font-medium">{item.attributes.episodeLength === null ? "-" : item.attributes.episodeLength + " minutes each"}</td>
                       </tr>
                     </tbody>
                   </table>
                   </div>
                  </div>
                  <div className="yt-thumbnail relative  col-start-5 row-start-4 h-[70px] w-full ml-5 mt-3">
                    <a href={"https://www.youtube.com/watch?v=" + item.attributes.youtubeVideoId} className="no-underline h-full">
                      <img src={"https://i.ytimg.com/vi/"+ item.attributes.youtubeVideoId +"/hqdefault.jpg"} 
                        className="w-full h-full object-cover absolute rounded-sm "
                      />
                    <div className="text-[white]  bg-gradient-to-t from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.1)] hover:from-[rgba(0,0,0,.8)] hover:to-[rgba(0,0,0,.8)] relative h-[inherit] w-[inherit] rounded-md text-center " >
                    <i className="fab fa-youtube fa-2x inline mt-3"></i>
                    <h3 className="inline font-medium ml-1">Play Trailer</h3>
                    </div>
                    </a>
                  </div>



                


              </div>)
          })
      }
    
    </>
     )
}

export default Animecard;

// {e.map((item, index) => {
//     return (
//         <div key={index} className="relative h-screen grid grid-cols-6 grid-rows-3  " >
//             <div className="cover-img w-full absolute ">
//                 {item.attributes.coverImage === null ? 
//                 <img  src={defaultImage} className="mt-35 h-[400px] w-[inherit] brightness-50 " /> :
//                 <img src={item.attributes.coverImage.original} 
//                 className="mt-35 w-[inherit] h-[400px] brightness-50 object-none object-center " />}
//             </div>


//             <div className="poster-img h-[300px] w-[200px] absolute col-start-2  ">
//                 <img src={item.attributes.posterImage.original} 
//                     className="h-[inherit] w-[inherit] rounded-md "
//                 />
//             </div>
            
//             <div className="info relative col-start-3 row-start-2 auto-rows-max mt-[150px]  ">
//                 {item.attributes.titles.en === undefined ? <h3>{item.attributes.titles.en_jp}</h3> :
//                 <h3>{item.attributes.titles.en}</h3>
//                 }

//                 { item.attributes.description.length < 150 ? <span>{item.attributes.description}</span> :
//                     (isClicked ? 
//                   <span>
//                     {item.attributes.description}
//                     <button style={{"border": "none", "backgroundColor": "white", "color": "red"}} onClick={handleClick}>...Read Less</button>
//                   </span> :
//                   <span>
//                     {item.attributes.description.slice(0, 150) + "..."}
//                     <button style={{"border": "none", "backgroundColor": "white", "color": "red"}} onClick={handleClick}>Read More</button>
//                   </span>)
//                   }

//             </div>
//         </div>
//             );
//     })}
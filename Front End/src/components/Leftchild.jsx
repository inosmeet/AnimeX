import SidebarBtn from "./Category";


export default function Leftchild(){
  const url = "https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=";
  const endUrl = "&page%5Blimit%5D=50";
  return (
    <div className="left-child">
    <div className="sd-btn">
    <SidebarBtn 
      title="Content Indicator"
      api={`${url}223${endUrl}`}
    />
    <SidebarBtn 
      title="Dynamic"
      api={`${url}227${endUrl}`}
    />
    <SidebarBtn 
      title="Element"
      api={`${url}228${endUrl}`}
    />
    <SidebarBtn 
      title="Setting"
      api={`${url}230${endUrl}`}
    />
    <SidebarBtn 
      title="Target Demographics"
      api={`${url}241${endUrl}`}
    />
    <SidebarBtn 
      title="Themes"
      api={`${url}231${endUrl}`}
    />
    </div>
  </div>
  )
}
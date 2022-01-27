import SidebarBtn from "./Category";


export default function Leftchild(){
    return (
        <div className="left-child">
        <div className="sd-btn">
        <SidebarBtn 
          title="Content Indicator"
          api="https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=223&page%5Blimit%5D=50"
        />
        <SidebarBtn 
          title="Dynamic"
          api="https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=227&page%5Blimit%5D=50"
        />
        <SidebarBtn 
          title="Element"
          api="https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=228&page%5Blimit%5D=50"
        />
        <SidebarBtn 
          title="Setting"
          api="https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=230&page%5Blimit%5D=50"
        />
        <SidebarBtn 
          title="Target Demographics"
          api="https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=241&page%5Blimit%5D=50"
        />
        <SidebarBtn 
          title="Themes"
          api=" https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=231&page%5Blimit%5D=50"
        />
        </div>
      </div>
    )
}
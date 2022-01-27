import { useState, useEffect } from "react";
import axios from "axios";


 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(false);
 
 const useApi = (url) => {
 useEffect(() => {
   const loadData = async () => {
       
       setLoading(true);

       const response = await axios.get(url);

       setData(response.data.data);

       setLoading(false);
   }
   loadData();
}, []);

    return {data, loading};
 
}

 export default useApi;
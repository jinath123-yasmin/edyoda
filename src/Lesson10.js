import { useState,useEffect } from "react"
import axios from "axios"


const DataFetchAxios=()=>{
   const [data,setData]=useState(null);
   const [loading,setLoading]=useState(true);
   const [error,setError]=useState(null);

   useEffect(()=>{
    const fetchData=async()=>{
        try{
          const response=await axios.get("https://fakestoreapi.com/products/1")
          console.log(response);
          setData(response);
        }catch (error){
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    fetchData();
   },[])


   if(loading){
    return <h2>Loading....</h2>
   }

    return(
        <div class="product-card">
       <h3>Data fetching using axios</h3>
       <h3>{JSON.stringify(data)}</h3>
        </div>
    )
}

export default DataFetchAxios
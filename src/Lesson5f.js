import { useState } from "react"


const ItemList=()=>{

    const [items,setItems]=useState([
        {id:1,name:'Item1'},
        {id:2,name:'Item2'},
        {id:3,name:'Item3'}
    ])
    

    const handleClick=()=>{
     
        setItems([...items,{
            id:4,name:"item4"
        },{
            id:5,name:"item5"
        }])
    }

    return(
   <div>
     {
        items.map((item)=>(
            <li>{item.name}</li>
        ))
     }

     <button onClick={handleClick}>AddItem</button>
   </div>
    )
}

export default ItemList
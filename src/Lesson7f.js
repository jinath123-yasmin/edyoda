import { useState } from "react"


const SearchText=()=>{

    const [list,setList]=useState(["apple","orange","kiwi"])
    const [searchItem,setSearchItem]=useState("")


    const searchResult=list.filter((item)=>
       item.toLowerCase().includes(searchItem.toLowerCase())
    )

    return(
        <div>
       <input  placeholder="Search Items" onChange={(e)=>setSearchItem(e.target.value)}/>
       <ul>
       {
        searchResult.map((items)=>
          <li>{items}</li>
      ) }
       </ul>
        </div>
    )
}

export default SearchText
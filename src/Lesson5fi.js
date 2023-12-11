import { useState } from "react"


const TodoFuntion=()=>{

    const [todo,setTodo]=useState(["dancing","coding"]);
    const [text,setText]=useState("")

    function addItem(){
        if(!todo.includes(text)){
            setTodo([...todo,text])
        }
        setText("")
    }

    function deleteItem(item){
            setTodo(todo.filter((i)=> i !==item))
    }

    return(
<div>
    <input placeholder="Enter items" value={text} onChange={(e)=>setText(e.target.value)}  />
    <button onClick={addItem}>AddItem</button>
    {
        todo.map((item)=>(
            <ul>
                <li >{item}
                <button onClick={()=>deleteItem(item)}>Delete</button>
                </li>

            </ul>
        ))
    }
</div>
    )
}

export default TodoFuntion
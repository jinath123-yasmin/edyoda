import { useEffect, useState } from "react"


const CounterApp=()=>{
    const [counter,setCounter]=useState(0)

function addIncrement(){
    setCounter(counter+5)
}

function decIncrement(){
    setCounter(counter-5)
}

useEffect(()=>{
    console.log("the state is updated");
},[counter])
    return(
     <div>
       <button onClick={addIncrement}>IncValue</button>
       {counter}
       <button onClick={decIncrement}>DecValue</button>
     </div>
    )
}

export default CounterApp
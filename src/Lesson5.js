import { useState } from "react"


const CounterApp=()=>{
    const [counter,setCounter]=useState()

function addIncrement(){
    setCounter(counter+5)
}

function decIncrement(){
    setCounter(counter-5)
}
    return(
     <div>
       <button onClick={addIncrement}>IncValue</button>
       {counter}
       <button onClick={decIncrement}>DecValue</button>
     </div>
    )
}

export default CounterApp
import { useEffect, useState } from "react"



const CounterAppLifeCycle=()=>{
    const [count,setCount]=useState(0)

    const handleKeyPress=(event)=>{
        if(event.key === 'ArrowUp'){
            setCount((prevVal)=> prevVal+1)
        }
    }

    
    useEffect(()=>{
        console.log('Counter is Updated') //mounting phase

        window.addEventListener('keydown',handleKeyPress)

        return ()=>{
            console.log("Counter will unmount");
            window.removeEventListener('keydown',handleKeyPress)
        }
    },[])
return(
<div>
    <p>Press "Arrow Up" Keyy</p>
    <h2>Count: {count}</h2>
</div>
)
}

export default CounterAppLifeCycle


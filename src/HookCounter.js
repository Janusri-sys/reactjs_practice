//useState hook lets u add state to functional components
//In classes, the state is always an object
//With the useState hook, the state doesn't have to be an object it may be array,object or primitive DT
//useState hook returns an array with two elements
//first element : current value of the state --- second element :state setter function
//new state value depends on the previous state value.you can pass a function to the setter function
//When dealing with objects or arrays , always make sure to spread your state variable and then call the setter function.
import React, { useState } from 'react'

function HookCounter() {
        const initialCount=0
        const[count,setCount]=useState(initialCount)

        const incrementFive=()=>{
          for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
          }
        }
  return (
    <div>
        count:{count}
        <br/>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={incrementFive}>incrementFive</button>
    </div>
  )
}
export default HookCounter;
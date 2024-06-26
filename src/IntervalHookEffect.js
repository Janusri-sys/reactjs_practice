import React, { useEffect, useState } from 'react'

function IntervalHookEffect() {
    const[count,setCount]=useState(0)

    const tick=()=>{
        setCount(
            prevCount=>prevCount+1 // or give int the dependency list [count] line 14
        )
    }
    useEffect(()=>{
        const interval=setInterval(tick,1000)
        return()=>clearInterval(interval)
    },[])
  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

export default IntervalHookEffect
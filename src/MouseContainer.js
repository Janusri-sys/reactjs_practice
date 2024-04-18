
import React,{useState} from 'react'
import HookuseEffectThree from './HookuseEffectThree'

function MouseContainer() {
    const [display,setDisplay]=useState("true")
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display && <HookuseEffectThree/>}
    </div>
  )
}

export default MouseContainer
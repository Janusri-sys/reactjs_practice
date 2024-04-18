//useeffect runs after evry render of the cmponent
//To conditionally rendering we pass an array as a second parameter(effect executed only when count value changes)
import React, { useState ,useEffect} from 'react'

function HookuseEffectOne() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState("")
    useEffect(()=>{
      console.log("Updating document title")
      document.title=`you clicked ${count} times`
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookuseEffectOne
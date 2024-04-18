import React, { useState,useEffect } from 'react'

function HookuseEffectThree() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMousePosition=e=>{
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
          console.log("Component unmount code")
          window.removeEventListener('mousemove',logMousePosition)
        }

      }
    ,[]) //this effect should not depend on any props or state no use to call this effect on re-rendering
    //the function that is passed to useEffect can return a functionwhich will be executed when component willunmount 
  return (
    <div>
        Hooks X={x} Y={y}
    </div>
  )
}

export default HookuseEffectThree
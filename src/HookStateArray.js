//how to use state hook when state variable is an array
//setter method doesn't merge with the state variable we have do this by spread operator manually
import React,{useState} from 'react'

function HookStateArray() {
    const [items,setItems]=useState([])
    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add a item</button>
        <ul>
            {items.map(item=>(
                <li key={item.id}>{item.id}-{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default HookStateArray
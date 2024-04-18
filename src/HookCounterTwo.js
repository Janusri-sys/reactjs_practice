//how to use state hook when state variable is an object
//setter method doesn't merge with the star\te variable we have do this by spread operator manually
import React,{useState} from 'react'

function HookCounterTwo() {
    const[name,setName]=useState({firstName:'',lastName:''})

  return (
    <div>
        <form>
            <label>Firstname : </label>
            <input type="text" 
            value={name.firstName}
            onChange={e=>setName({...name,firstName:e.target.value})}/>

            <label>Lastname : </label>
            <input type="text"
            value={name.lastName}
            onChange={e=>setName({...name,lastName:e.target.value})}/>

            <h2>Your first name is {name.firstName}</h2>
            <h2>Your last name is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
  )
}

export default HookCounterTwo
import React from 'react'

function ChildComponent(props) {
    const {greetHandler}=props
  return (
    <div>
        <button onClick={()=>greetHandler('child')}>GreetParent</button>

    </div>
  )
}

export default ChildComponent
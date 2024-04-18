import React from 'react'

function Person(props) {
  return (
    <div><h2>Iam {props.person.name} Iam {props.person.age} years old</h2></div>
  )
}

export default Person
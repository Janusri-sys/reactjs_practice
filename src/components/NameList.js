import React from 'react'
import Person from './Person'

function NameList() {
    
    const persons=[
        {
            id:1,
            name:'janu',
            age:30,
        },
        {
            id:2,
            name:'sri',
            age:20,
        },
        {
            id:3,
            name:'thota',
            age:10,
        }

    ]
    const names=['Janu','sri','Thota']
    const nameList=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
    const personList=persons.map(person=><Person key={person.id} person={person}/>)
  return (
    <div>
        {nameList}
        {/* {personList} */}
    </div>
  )
}

export default NameList
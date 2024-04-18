import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
      this.state={
        even:4
      }
    }
  render() {
    // 1)if(this.state.isLoggedIn){
    //     return <div>Welcome Janu</div>
    // }
    // else{
    //     return <div>Welcome Guest</div>
    // }

    // 2) let message
    // if(this.state.isLoggedIn){
    //      message=<div>Welcome Janu</div>
    // }
    // else{
    //     message=<div>Welcome Guest</div>
    //  }
    //  return(<div>{message}</div>)

    // 3)return(    
    //     this.state.isLoggedIn?
    //     <div>Welcome Janu</div>:
    //     <div>Welcome Guest</div>
    // )
    // return this.state.isLoggedIn && <div>Welcome Janu</div>

    return(
        (this.state.even)%2===0?
        <div>Even number</div>:
        <div>Odd number</div>
    )
  }
}

export default UserGreeting
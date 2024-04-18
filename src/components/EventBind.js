import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    //this.changeMessage=this.changeMessage.bind(this)
    }
    // changeMessage(){
    //     this.setState({
    //         message:"Hiii"
    //     })
    // }
    changeMessage=()=>{
        this.setState({
            message:"Hiii"
        })
    }
  render() {
    return (
      <div>
        {this.state.message}
        {/* <button onClick={this.changeMessage.bind(this)}>click</button> */}
        {/* <button onClick={()=>this.changeMessage()}>click</button> */}
        <button onClick={this.changeMessage}>click</button>
      </div>
    )
  }
}

export default EventBind
//The effect hook let u perform side effects in functional components
//it is a close replacement for componentDidMount,componentDidUpdate and componentWillUnmount

import React, { Component } from 'react'

class HookuseEffect extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0,name:""
      }
    }

    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
        console.log("Updating document title")
        document.title=`clicked ${this.state.count} times`
        }
    }
    IncrementOne=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <input type="text" 
        value={this.state.name}
        onChange={e=>{
          this.setState({name:e.target.value})
        }}/>
        <button onClick={this.IncrementOne}>Clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default HookuseEffect
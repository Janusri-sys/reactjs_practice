import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
        name:"janu"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"janu"
        })
    },2000)
    }
  render() {
    console.log("**Parent compoenent render**")
    return (
      <div>ParentComponent
        {/* <PureComp fullName={this.state.name}></PureComp>
        <RegComp fullName={this.state.name}></RegComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp
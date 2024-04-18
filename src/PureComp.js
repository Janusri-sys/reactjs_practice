import React, { PureComponent } from 'react'


class PureComp extends PureComponent {
    
  render() {
    console.log("**Pure compoenent render**")
    return (
      <div>PureComponent {this.props.fullName}</div>
    )
  }
}

export default PureComp
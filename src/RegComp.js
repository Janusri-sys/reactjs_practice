import React, { PureComponent } from 'react'

class RegComp extends PureComponent {
  render() {
    console.log("**Regular compoenent render**")
    return (
      <div>Regular Component {this.props.fullName}</div>
    )
  }
}

export default RegComp
import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         comments:"",
         topic:"react"
      }
    }
    handleUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleComment=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopic=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    const {username,comments,topic}=this.state
    return (
    <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={username} onChange={this.handleUsername}/>

      </div>
      <div>
        <label>Comments</label>
        <textarea value={comments} onChange={this.handleComment}></textarea>
      </div>
      <div>
        <label>Select</label>
        <select value={topic} onChange={this.handleTopic}>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
        </select>
        </div>
        <button type="submit">Submit</button>
    </form>
      
    )
  }
}

export default Form
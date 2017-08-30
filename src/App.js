import React, { Component } from 'react';
import 'tachyons/css/tachyons.css'
import {map, append} from 'ramda'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [1,2,3],
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({input: e.target.value})
  }
  handleSubmit (e) {
    e.preventDefault()
    this.setState({
      list: append(this.state.input, this.state.list),
      input: ''
    })
  }
  render() {
    const li = x=> {
      return (
        <li>{x}</li>
      )
    }

    return (
      <div className="pa4">
        <form onSubmit={this.handleSubmit}>
        <input type= "text"
          value={this.state.input}
          onChange={this.handleChange}
          />
        <button>Add To Do</button>
        </form>
        <ul>
         {map(li, this.state.list)}
        </ul>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './App.scss';
import getComponent from './exportComponent'
export default class App extends Component {
  state = {
    ary: ["header", "nav"]
  }
  test = () => {
    this.setState({
      ary: [...this.state.ary, 'nav']
    })
  }
  render() {
    const { ary } = this.state;
    return (
      <div className="App">
        {
          ary.map((item, index) => {
            return getComponent(item, index)
          })
        }
        <button onClick={this.test}>click me</button>
      </div>
    )
  }
}

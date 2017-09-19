import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const ROOT_NODE = document.getElementById('app')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState(prev => ({
      ...prev,
      counter: prev.counter + 1
    }))
  }

  decrement() {
    this.setState(prev => ({
      ...prev,
      counter: prev.counter - 1
    }))
  }

  render() {
    const { counter } = this.state

    if (counter > 5) {
      throw new Error('Count is above 5!')
    }

    return (
      <div>
        <h1>Hello World!</h1>
        <p>{counter}</p>

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, ROOT_NODE)

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
  }

  increment() {
    this.setState(prev => ({
      ...prev,
      counter: prev.counter + 1
    }))
  }

  render() {
    const { counter } = this.state

    if (counter > 5) {
      throw new Error('Count is above 5!')
    }

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h3>Hello World!</h3>
        <h1>{counter}</h1>

        <button
          style={{
            padding: '20px',
            fontSize: '2rem'
          }}
          onClick={this.increment}
        >+</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, ROOT_NODE)

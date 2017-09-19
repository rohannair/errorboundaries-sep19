import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const ROOT_NODE = document.getElementById('app')

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{color: 'red'}}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    return this.props.children
  }
}

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

ReactDOM.render(
  <div>
    <h3>outside the boundary</h3>
    <hr />
    <ErrorBoundary><App /></ErrorBoundary>
  </div>,
  ROOT_NODE
)

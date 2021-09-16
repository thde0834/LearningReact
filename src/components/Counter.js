import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    incrementFive() {
        for (let i = 0; i < 5; i++) {
            this.increment()
        }
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
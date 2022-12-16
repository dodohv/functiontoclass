import React, { Component } from 'react'

export default class Counter extends Component {
     state = {
        count: 0
     }

     addSecondary = () => {
        this.setState( prevState =>({count: prevState.count +1}))
     }
     subtractSecondary = () => {
        this.setState( prevState =>({count: prevState.count -1}))
     }

     add = () => {
        this.setState( prevState => {
            return {
                count: prevState.count + 1
            }
        } )
     }

     subtract = () => {
        this.setState( prevState => {
            return {
                count: prevState.count - 1
            }
        } )
     }

    render() {
        return (
            <div className="counter">
            <button className="counter--minus" onClick={this.subtract}>–</button>
            <div className="counter--count">
                <h1>{this.state.count}</h1>
            </div>
            <button className="counter--plus" onClick={this.add}>+</button>
        </div>
        )
    }
}

import React, { Component } from 'react'

export default class GoOut extends Component {
    
    state = {
        goOut: "Sim"
    }

    toggleGoOut = () => {
        this.setState(prevState => {
            return prevState === "Sim" ? "Não" : "Sim"
        })
    }

    render() {
        return (
            <div className="state">
            <h4 className="state--title"> Devo sair esta noite?</h4>
            <div className="state--value" onClick={this.toggleGoOut}>
                <h4>{this.state.goOut}</h4>
                <button onClick={toggleGoOut}> DECIDIR</button>
            </div>
        </div>
        )
    }
}

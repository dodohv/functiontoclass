import React, { Component } from 'react'

export default class GoOut extends Component {
    
    // state = {
    //     goOut: "Sim"
    // }

    // toggleGoOut = () => {
    //     this.setState(prevState => {
    //         return prevState === "Sim" ? "Não" : "Sim"
    //     })
    // }
    state = {
        goOut: 'Yes' 
    }
    
     toggleGoOut = () => {
        console.log(this.state.goOut)
        
        // this.setState(prevState => {
        //     console.log(prevState)
        //     return prevState === "Yes" ? "No" : "Yes"
            
        // })
        this.setState( prevState  => {
            console.log(prevState)
            return prevState === "Yes" ? "No" : "Yes"
            
        })
        //this.setState({goOut: "No"})

    }
    render() {
        return (
            <div className="state">
            <h4 className="state--title"> Devo sair esta noite?</h4>
            <div className="state--value"  onClick={this.toggleGoOut}>
                <h4>{this.state.goOut}</h4>
                
            </div>
        </div>
        )
    }
}

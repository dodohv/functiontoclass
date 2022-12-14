import React from 'react'
const GoOut = () => {
    const [goOut, setGoOut] = React.useState("Sim")
    
        const toggleGoOut = () =>{
            setGoOut(prevState =>  {
                return prevState === "Sim" ? "Não" : "Sim"
            })
        }
    return ( 
        <div className="state">
            <h4 className="state--title"> Devo sair esta noite?</h4>
            <div className="state--value" onClick={toggleGoOut}>
                <h4>{goOut}</h4>
            </div>
        </div>
     );
}
 
export default GoOut;
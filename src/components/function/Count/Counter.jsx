import React from "react"
const Counter = () => {
    const [count, setCount] = React.useState(0)
    const add = () => {
        setCount(prevCount => prevCount + 1)
    }
    const subtract = () => {
        setCount(prevCount => prevCount -1)
    }   
    return ( 
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
     );
}
 
export default Counter;
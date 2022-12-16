import React, { Component } from 'react'
import GoOut from './components/class/GoOut/GoOut'
import Greetings from './components/class/Welcome/Greetings'
import Header from './components/class/Welcome/Header'
//import Counter from './components/function/Count/Counter'
//import GoOut from './components/function/GoOut/GoOut'
//import Greetings from './components/function/Welcome/Greetings'
//import Header from './components/function/Welcome/Header'
import Counter from './components/class/Count/Counter'


//export default function App(props) {
//  return (
//    <h1>{props.type} component</h1?
//
//  )
//}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h6>{this.props.type} Component</h6>
        <Header username="dodohv"/>
        <Greetings/>
        <GoOut/>
        <Counter/>
        
        

      </div>
    )
  }
}



























//import reactLogo from './assets/react.svg'
//import './App.css'




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

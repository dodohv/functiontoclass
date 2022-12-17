import React, { Component } from 'react'
import GoOut from './components/class/GoOut/GoOut'
import Accordion from 'react-bootstrap/Accordion';
import Greetings from './components/class/Welcome/Greetings'
import Header from './components/class/Welcome/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Counter from './components/function/Count/Counter'
//import GoOut from './components/function/GoOut/GoOut'
//import Greetings from './components/function/Welcome/Greetings'
//import Header from './components/function/Welcome/Header'
import Counter from './components/class/Count/Counter'
import Timer from './components/function/Timer/Timer'
//import ToggleList from './components/function/Toggle/ToggleList'
import ToggleList from './components/class/Toggle/ToggleList'

//export default function App(props) {
//  return (
//    <h1>{props.type} component</h1?
//
//  )
//}

export default class App extends React.Component {
  state = { 
    items : [
      { id: 1, name: 'Item 1', isOpen: false},
      { id: 2, name: 'Item 2', isOpen:false},
      { id: 3, name: 'Item 3', isOpen: false},
      { id: 4, name: 'Item 4', isOpen: false},
      { id: 5, name: 'Item 5', isOpen: false},
      { id: 6, name: 'Item 6', isOpen: false},
      { id: 7, name: 'Item 7', isOpen: false},
      { id: 8, name: 'Item 8', isOpen: false},
      { id: 9, name: 'Item 9', isOpen: false},
      { id: 10, name: 'Item 10', isOpen: false}
    ],
  };

  toggleItem = id => {
    this.setState( state => ({ 
      items: state.items.map(item => {
        if (item.id === id) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      })
    }))
  }

  render() {
    return (
      <div>
        <h6>{this.props.type} Component</h6>
        
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header>Headers #1</Accordion.Header>
        <Accordion.Body>
        <Header username="dodohv"/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Cumprimentos  #2</Accordion.Header>
        <Accordion.Body>
        <Greetings/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Decisão #3</Accordion.Header>
        <Accordion.Body>
        <GoOut/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Contador #4</Accordion.Header>
        <Accordion.Body>
        <Counter/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Timer #5</Accordion.Header>
        <Accordion.Body>
        <Timer/>
        </Accordion.Body>
      </Accordion.Item>
        </Accordion>               
       

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

import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import {createContext} from "react";

export const CounterContext = createContext()
function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = function () {
    setCounter(counter + 1);
  }
  return (
    <div>
      <CounterContext.Provider value={{counter,setCounter}}>
      <Header counter={counter}/>
      <button onClick={handleClick}>Click me</button>
      </CounterContext.Provider>
    </div>
  );
}

export default App;

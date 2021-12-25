import React, { useState } from "react";
import './App.css';
import Calculator from "./components/Calculator";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState({
    costOfFlat: '', 
    interestRate: '',
    initialPayment: '', 
    mortgageTerm: ''
  });

 
  return (
    <CountContext.Provider value={{
      count, setCount,
      inputValue, setInputValue,
      // getSumOfCredit, getMonthlyInstalment
    }}>
      <div className='app'>
        <div className="wrapper">
          <h1 className='title'>ИПОТЕЧНЫЙ КАЛЬКУЛЯТОР</h1>
          <hr className='hr'/>
          <Calculator/>
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default App;

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

  function getMonthlyInstalment(
    sg=inputValue.costOfFlat,
    pf=inputValue.initialPayment,
    py=inputValue.interestRate,
    m=inputValue.mortgageTerm,
    p=(inputValue.interestRate/12)/100, 
    s=inputValue.costOfFlat-inputValue.initialPayment) {
      if (sg==='', py==='', m==='' || +pf >= +sg) {
        return 0
      } 
        const monthlyPayment = s*(p*(Math.pow(1+p,m)))/(Math.pow(1+p,m)-1)
        return monthlyPayment.toFixed()
  }

  function getSumOfCredit(
    pf=inputValue.initialPayment,
    sg=inputValue.costOfFlat) {
      if(+pf >= +sg) {
        return 0
      }
      return sg-pf
  }
  
  return (
    <CountContext.Provider value={{
      count, setCount,
      inputValue, setInputValue,
      getSumOfCredit, getMonthlyInstalment
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

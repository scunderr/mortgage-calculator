import React, { useEffect, useRef, useState } from "react";
import './App.css';
import Calculator from "./components/Calculator";
import { CountContext } from "./context";

function App() {
  const [inputValue, setInputValue] = useState({
    costOfFlat: '', 
    interestRate: '',
    initialPayment: '', 
    mortgageTerm: ''
  });

  const monthlyInstalment = useRef(null)
  const [monthlyPayments, setMonthlyPayments] = useState(0)

  useEffect(() => {
    setMonthlyPayments(monthlyInstalment.current.innerHTML)
  })

  function getMonthlyInstalment(
    sg=inputValue.costOfFlat,
    pf=inputValue.initialPayment,
    py=inputValue.interestRate,
    m=inputValue.mortgageTerm,
    p=(inputValue.interestRate/12)/100, 
    s=inputValue.costOfFlat-inputValue.initialPayment) {
        if (sg==='' || py==='' || m==='' || +pf >= +sg) {
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
        return (sg-pf).toFixed()
  }

  function getTotalAmount() {
    if (monthlyPayments !== null) {
      return (monthlyPayments * inputValue.mortgageTerm).toFixed()
    }
    return 0
  }

  return (
    <CountContext.Provider value={{
      inputValue, setInputValue, getTotalAmount,
      monthlyInstalment, monthlyPayments,
      getSumOfCredit, getMonthlyInstalment, 
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

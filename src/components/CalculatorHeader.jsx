import React, { useContext } from 'react';
import { CountContext } from '../context';
import CalcCounter from '../UI/Counter.jsx/CalcCounter';

const CalculatorHeader = () => {
    const {inputValue} = useContext(CountContext);

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
            return monthlyPayment.toFixed(2)
    }
    
    function getSumOfCredit(
        pf=inputValue.initialPayment,
        sg=inputValue.costOfFlat) {
          if(+pf >= +sg) {
            return 0
          }
          return (sg-pf).toFixed()
      }
      

    const calcResult = [
        {id:1, inscription: 'ЕЖЕМЕСЯЧНЫЙ ПЛАТЕЖ', counter: () => getMonthlyInstalment()}, 
        {id:2, inscription: 'СУММА КРЕДИТА', counter: () => getSumOfCredit()}
    ]

    return (
        <div className='calculator-counters'>
            {calcResult.map(elem => 
                <CalcCounter 
                    inscription={elem.inscription}
                    counter={elem.counter()}
                    key={elem.id}
                />
            )}
        </div>
    );
};

export default CalculatorHeader;
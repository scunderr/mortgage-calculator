import React, { useContext } from 'react';
import { CountContext } from '../context';
import CalcCounter from '../UI/Counter/CalcCounter';

const CalculatorHeader = () => {
  const {getMonthlyInstalment, getSumOfCredit, monthlyInstalment} = useContext(CountContext);
    
    const calcResult = [
        {id:1, inscription: 'ЕЖЕМЕСЯЧНЫЙ ПЛАТЕЖ', counter: () => getMonthlyInstalment(), ref: monthlyInstalment}, 
        {id:2, inscription: 'СУММА КРЕДИТА', counter: () => getSumOfCredit()}
    ]

    return (
        <div className='calculator-counters'>
            {calcResult.map(elem => 
                <CalcCounter 
                    inscription={elem.inscription}
                    counter={elem.counter()}
                    key={elem.id}
                    ref={elem.ref}
                />
            )}
        </div>
    );
};

export default CalculatorHeader;
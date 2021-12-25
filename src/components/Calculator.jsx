import React, { useContext } from 'react';
import { CountContext } from '../context';
import CalculatorBody from './CalculatorBody';
import CalculatorFooter from './CalculatorFooter';
import CalculatorHeader from './CalculatorHeader';

const Calculator = () => {
    // const {getMonthlyInstalment, getSumOfCredit} = useContext(CountContext);

    return (
        <div className="mortgage-calculator">
            <CalculatorHeader/>
            <CalculatorBody/>
            <CalculatorFooter
              // style={{fontSize: '25px'}}
              // inscription={'СУММА КРЕДИТА'} 
              // counter={getSumOfCredit}
            />
        </div>
    );
};

export default Calculator;
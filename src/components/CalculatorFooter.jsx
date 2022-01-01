import React, { useContext } from 'react';
import { CountContext } from '../context';
import CalcCounter from '../UI/Counter/CalcCounter';
import CalculatorChart from './CalculatorChart';

const CalculatorFooter = () => {
    const {getTotalAmount} = useContext(CountContext);

    return (
        <div className='calculator-footer'>
            <CalcCounter
                inscription={'СУММА ВЫПЛАТ БАНКУ'}
                counter={getTotalAmount()}
            />
            <CalculatorChart
                
            />
        </div>
    );
};

export default CalculatorFooter;
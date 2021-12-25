import React from 'react';
import CalcCounter from '../UI/Counter.jsx/CalcCounter';

const CalculatorFooter = ({...props}) => {
    return (
        <div className='calculator-counters'>
            <CalcCounter {...props}/>
        </div>
    );
};

export default CalculatorFooter;
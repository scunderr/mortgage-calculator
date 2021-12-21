import React from 'react';
import CalcCounter from '../UI/Counter.jsx/CalcCounter';

const CalculatorFooter = ({...props}) => {
    return (
        <div className='calculatorCounters calculatorFooter'>
            <CalcCounter {...props}/>
        </div>
    );
};

export default CalculatorFooter;
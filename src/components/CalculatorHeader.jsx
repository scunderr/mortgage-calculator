import React from 'react';
import CalcCounter from '../UI/Counter.jsx/CalcCounter';

const CalculatorHeader = ({...props}) => {
    return (
        <div className='calculatorCounters calculatorHeader'>
            <CalcCounter {...props}/>
        </div>
    );
};

export default CalculatorHeader;
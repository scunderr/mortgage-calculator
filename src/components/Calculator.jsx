import React from 'react';
import CalculatorBody from './CalculatorBody';
import CalculatorFooter from './CalculatorFooter';
import CalculatorHeader from './CalculatorHeader';

const Calculator = () => {
    return (
        <div className="mortgage-calculator">
            <CalculatorHeader/>
            <CalculatorBody/>
            <CalculatorFooter/>
        </div>
    );
};

export default Calculator;
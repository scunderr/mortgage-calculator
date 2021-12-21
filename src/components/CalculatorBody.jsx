import React from 'react';
import CalcBorder from '../UI/Border/CalcBorder';
import FieldButtons from './FieldButtons';
import FieldInput from './FieldInput';

const CalculatorBody = () => {
    return (
        <form className='calcBodyContainer'>
            <FieldInput/>
            <CalcBorder/>
            <FieldButtons/>
        </form>
    );
};

export default CalculatorBody;
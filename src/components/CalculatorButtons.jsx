import React from 'react';
import CalcButton from '../UI/Button/CalcButton';

const CalculatorButtons = ({numbers, inscription, templateValue}) => {
    return (
        <div className='field-buttons'>
            <ul className='field-buttons_btns'>
                {numbers.map(number => 
                    <CalcButton 
                        key={number}
                        number={number}
                        onClick={()=>templateValue(number)}
                    />
                )}
            </ul>
            <div className='field-buttons_ins'>
                {inscription}
            </div>
        </div> 
    );
};

export default CalculatorButtons;
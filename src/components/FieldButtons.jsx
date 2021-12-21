import React, { useContext } from 'react';
import { CountContext } from '../context';
import CalculatorButtons from './CalculatorButtons';

const FieldButtons = () => {
    const {inputValue, setInputValue} = useContext(CountContext);

    const fieldButtons = [
        {
            id:1,
            tempNumbers: [10, 15, 20, 25, 30, 35, 40], 
            inscription: '% ОТ СТОИМОСТИ КВАРТИРЫ',
        },
        {
            id:2,
            tempNumbers: [3, 5, 7, 10, 15, 20, 25, 30],
            inscription: 'ЛЕТ',
        }
    ]

    function getPercOfCost() {
        if(inputValue.costOfFlat) {
            console.log('gg')
        }
    }


    return (
        <div className='blocks-wrapper'>
            {fieldButtons.map(setNums => 
                <CalculatorButtons
                    numbers={setNums.tempNumbers}
                    inscription={setNums.inscription}
                    key={setNums.id}
                    op={getPercOfCost}
                />
            )}
        </div>
    );
};

export default FieldButtons;
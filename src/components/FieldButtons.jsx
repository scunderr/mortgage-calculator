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
            getTemplateValue(num) {
                if(inputValue.costOfFlat) {
                    const payment = (inputValue.costOfFlat*num*0.01).toFixed()
                    setInputValue({...inputValue, initialPayment: payment})
                }
            }
        },
        {
            id:2,
            tempNumbers: [3, 5, 7, 10, 15, 20, 25, 30],
            inscription: 'ЛЕТ',
            getTemplateValue(num) {
                const term = num*12
                setInputValue({...inputValue, mortgageTerm: term})
            }
        }
    ]

    return (
        <div className='blocks-wrapper'>
            {fieldButtons.map(elem => 
                <CalculatorButtons
                    numbers={elem.tempNumbers}
                    inscription={elem.inscription}
                    key={elem.id}
                    templateValue={elem.getTemplateValue}
                />
            )}
        </div>
    );
};

export default FieldButtons;
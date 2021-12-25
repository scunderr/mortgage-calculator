import React, { useContext } from 'react';
import { CountContext } from '../context';
import CalcInput from '../UI/Input/CalcInput';

const FieldInput = () => {
    const {inputValue, setInputValue} = useContext(CountContext);

    return (
        <div className="blocks-wrapper ">
            <CalcInput
                id='1' 
                title={'ОБЩАЯ СТОИМОСТЬ КВАРТИРЫ'}
                inscription={'РУБ.'}
                value={inputValue.costOfFlat}
                onChange={e => setInputValue({...inputValue, costOfFlat: e.target.value})}
                maxLength={10}
            />
            <CalcInput
                id='2' 
                title={'ПРОЦЕНТНАЯ СТАВКА'} 
                inscription={'% ГОДОВЫХ'}
                value={inputValue.interestRate}
                onChange={e => setInputValue({...inputValue, interestRate: e.target.value})}
                maxLength={5}
            />
            <CalcInput
                id='3'
                title={'ПЕРВОНАЧАЛЬНЫЙ ВЗНОС'}
                inscription={'РУБ.'}
                value={inputValue.initialPayment}
                onChange={e => setInputValue({...inputValue, initialPayment: e.target.value})}
                maxLength={10}
            />
            <CalcInput
                id='4'
                title={'СРОК ИПОТЕКИ'}
                inscription={'МЕС.'}
                value={inputValue.mortgageTerm}
                onChange={e => setInputValue({...inputValue, mortgageTerm: e.target.value})}
                maxLength={3}
            />                   
        </div>
    );
};

export default FieldInput;
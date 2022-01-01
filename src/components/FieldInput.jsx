import React, { useContext } from 'react';
import { CountContext } from '../context';
import CalcInput from '../UI/Input/CalcInput';

const FieldInput = () => {
    const {inputValue, setInputValue} = useContext(CountContext);

    // const fieldInputData = [
    //     {id:'1', title: 'ОБЩАЯ СТОИМОСТЬ КВАРТИРЫ', value: inputValue.costOfFlat, inscription: 'РУБ.', maxLength: 10, change: (e) => setInputValue({...inputValue, costOfFlat: e.target.value})}, 
    //     {id:'2', title: 'ПРОЦЕНТНАЯ СТАВКА', value: inputValue.interestRate, inscription: '% ГОДОВЫХ', maxLength: 5, change: (e) => setInputValue({...inputValue, interestRate: e.target.value})}, 
    //     {id:'3', title: 'ПЕРВОНАЧАЛЬНЫЙ ВЗНОС', value: inputValue.initialPayment, inscription: 'РУБ.', maxLength: 10, change: (e) => setInputValue({...inputValue, initialPayment: e.target.value})}, 
    //     {id:'4', title: 'СРОК ИПОТЕКИ', value: inputValue.mortgageTerm, inscription: 'МЕС.', maxLength: 3, change: (e) => setInputValue({...inputValue, mortgageTerm: e.target.value})}, 
    // ]

    return (
        <div className="blocks-wrapper ">
            {/* {fieldInputData.map(elem => 
                <CalcInput
                    title={elem.title}
                    inscription={elem.inscription}
                    value={elem.value}
                    onChange={elem.change()}
                    maxLength={elem.maxLength}
                />
            )} */}
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
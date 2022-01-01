import React, { useContext } from 'react';
import { CountContext } from '../context';
import CalcChart from '../UI/Chart/CalcChart';

const CalculatorChart = () => {
    const {getTotalAmount, getSumOfCredit} = useContext(CountContext);

    function changeChart() {
        const totalAmount = getTotalAmount()
        if (totalAmount !== '0') {
            const shareFlat = getSumOfCredit()/totalAmount*100;
            const shareOfPaymentsToBank = 100-shareFlat
            console.log(shareFlat)
            console.log(shareOfPaymentsToBank)
            const shares = [shareFlat, shareOfPaymentsToBank]
            return shares
        }
        return [50, 50]
    }

    return (
        <div className='calculator-chart'>
            <CalcChart
                shares={changeChart()}
                ins1={'СУММА КРЕДИТА'}
                ins2={'ОБЩАЯ СУММА ПЕРЕПЛАТЫ'}
            />
        </div>
    );
};

export default CalculatorChart;
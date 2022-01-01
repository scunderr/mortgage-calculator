import React from 'react';
import classes from './CalcChart.module.css'

const CalcChart = ({shares, ins1, ins2}) => {
    console.log(shares)
    return (
        <div className={classes.chart}>
            <div className={classes.graphicImage}>
                <div 
                    className={[classes.totalityOfShares, classes.share1].join(' ')}
                    style={{width: `${shares[0]}%`}}
                ></div>
                <div 
                    className={[classes.totalityOfShares, classes.share2].join(' ')}
                    style={{width: `${shares[1]}%`}}
                ></div>
            </div>
            <ul className={classes.explication}>
                <li className={[classes.ins, classes.ins1].join(' ')}>
                    {ins1}
                </li>
                <li className={[classes.ins, classes.ins2].join(' ')}>
                    {ins2}
                </li>
            </ul>
        </div>
    );
};

export default CalcChart;
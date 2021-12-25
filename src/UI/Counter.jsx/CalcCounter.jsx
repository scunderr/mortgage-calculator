import React from 'react';
import classes from './CalcCounter.module.css'

const CalcCounter = ({counter, inscription}) => {
    return (
        <div className={classes.counter}>
            <div 
                className={classes.counterValue}
            >
                {counter}
            </div>
            <div className={classes.counterInscription}>
                <span 
                    className={classes.counterPrice}
                >
                    РУБ.
                </span>
                {inscription} 
            </div>
        </div>
    );
};

export default CalcCounter;
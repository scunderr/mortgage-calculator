import React from 'react';
import classes from './CalcCounter.module.css'

const CalcCounter = ({counter, inscription, style}) => {
    return (
        <div className={classes.counter}>
            <div 
                className={classes.counterValue}
                style={style}
            >
                {counter()}
            </div>
            <div className={classes.counterInscription}>
                <span 
                    className={classes.counterPrice}
                    style={style}
                >
                    РУБ.
                </span>
                {inscription} 
            </div>
        </div>
    );
};

export default CalcCounter;
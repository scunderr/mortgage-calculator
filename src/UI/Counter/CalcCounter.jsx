import React from 'react';
import classes from './CalcCounter.module.css'

const CalcCounter = React.forwardRef(({counter, inscription}, ref) => {
    return (
        <div className={classes.counter}>
            <div ref={ref} className={classes.counterValue}>
                {counter}
            </div>
            <div className={classes.counterInscription}>
                <span className={classes.counterPrice}>
                    РУБ.
                </span>
                {inscription} 
            </div>
        </div>
    );
});

export default CalcCounter;
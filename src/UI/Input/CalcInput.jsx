import React from 'react';
import classes from './CalcInput.module.css'

const CalcInput = ({title, inscription, ...props}) => {
    return (
        <div className={classes.inputArea}>
            <label htmlFor='id' className={classes.label}>{title}</label>
            <div className={classes.calcInputWrapper}>
                <input 
                    {...props}
                    className={classes.calcInput}
                    type='text' 
                    placeholder='0.00'
                    autoComplete="off"
                />
                <div className={classes.calcInputInscription}>
                    {inscription}
                </div>
            </div>
            
        </div>
    );
};

export default CalcInput;
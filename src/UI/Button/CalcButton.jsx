import React from 'react';
import classes from './CalcButton.module.css'

const CalcButton = ({number, op}) => {
    return (
        <li 
            className={classes.CalcButton}
            onClick={()=>op()}
        >
            {number}
        </li>
    );
};

export default CalcButton;
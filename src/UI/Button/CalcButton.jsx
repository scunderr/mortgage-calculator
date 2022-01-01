import React from 'react';
import classes from './CalcButton.module.css';

const CalcButton = ({number, ...props}) => {

    return (
        <li 
            className={classes.CalcButton}
            {...props}
        >
            {number}
        </li>
    );
};

export default CalcButton;
import React from 'react';
import './Button.css';
import Path from '../assets/Path 1.svg'

const Button = ({...props}) => {
    return (
       <button {...props}>
            <img src={Path} alt="Btn" />
       </button>
    )
}

export default Button

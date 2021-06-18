import React from 'react';
import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

function Button(props) {
    const {children, type, onClick, buttonStyle, buttonSize} = props;
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button

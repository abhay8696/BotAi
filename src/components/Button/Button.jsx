import React, { useContext } from 'react';
//styles
import "./Button.css";
//contexts
import { ThemeContext } from '../../AllContexts';

const Button = props => {
    //props
    const { clickFunction, text } = props;
    //context
    const [theme, setTheme] = useContext(ThemeContext)
    return (
        <button className={`Button ButtonTheme-${theme}`}>
            {text || "text"}
        </button>
    );
};

export default Button;
import React, { useContext, useState } from 'react';
//styles
import "./Form.css";
//contexts
import { ThemeContext } from '../../AllContexts';
import Button from '../Button/Button';

const Form = props => {
    //props
    const { submitFunction } = props;
    //states
    const [text, setText] = useState("");
    // ..contexts
    const [theme, setTheme] = useContext(ThemeContext);
    //functions
    const handleSubmit = event => {
        event.preventDefault();
    }
    const saveChat = event=> {
        event.preventDefault()
    }
    return (
        <form className='Form' onSubmit={handleSubmit}>
            <input value={text} onChange={e => setText(e.target.value)} required />
            <Button text="add" type="submit" />
            <Button text="save" clickFunction={saveChat}/>
        </form>
    );
};

export default Form;
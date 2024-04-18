import React, { useContext } from 'react';
import { ThemeContext } from '../../AllContexts';
//styles
import "./ChatBody.css";
//assets
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
//components
import ChatCard from '../ChatCard/ChatCard';
import Form from '../Form/Form';

const ChatBody = () => {
    //context
    const [theme, setTheme] = useContext(ThemeContext)
    return (
        <div className={`ChatBody ChatBodyTheme-${theme}`}>
            <ChatCard icon={icon2} name="you" message="hi" time="10:55 AM"/>
            <ChatCard icon={icon1} name="Bot AI" message="hi" time="10:55 AM"/>
            <Form />
        </div>
    );
};

export default ChatBody;
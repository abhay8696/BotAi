import React, { useContext } from 'react';
//styles
import "./ChatCard.css";
//contexts
import { ThemeContext } from '../../AllContexts';

const ChatCard = props => {
    //props
    const { name, message, time, icon, customClass } = props;
    // ..contexts
    const [theme, setTheme] = useContext(ThemeContext);
    return (
        <div className={`ChatCard ChatCardTheme-${theme} ${customClass}`}>
            <span className='chatCardImage-wrapper'>
                <img src={icon} alt={`${name} icon`} className='chatCardImage'/>
            </span>
            <span className='chatCardTexts'>
                <span className='chatCardName'>{name}</span>
                <span className='chatCardMessage'>{message}</span>
                <span className='chatCardTime'>{time}</span>
            </span>
        </div>
    );
};

export default ChatCard;
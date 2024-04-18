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
import Intro from '../Intro/Intro';
//helper functions
import { createTimeStamp } from '../../functions/functions';

const ChatBody = props => {
    //props
    const { currentChat, addChatMsg } = props;
    //context
    const [theme, setTheme] = useContext(ThemeContext);
    //functions
    const handleFormInput = text => {
        const newChatCard = {
            icon: icon2,
            name: "you",
            message: text,
            time: createTimeStamp(),
            id: new Date() / 1,
        }
        addChatMsg(newChatCard);
    }
    const displayCards = () => {
        if(!currentChat || !currentChat.length) return [];

        return currentChat.map(card => {
            const { icon, name, message, time, id } = card;
            return <ChatCard key={id} icon={icon} name={name} message={message} time={time}/>
        })
    }
    return (
        <div className={`ChatBody ChatBodyTheme-${theme}`}>
        {
            currentChat?.length ?
            <>
                <div className='cardsWrapper'>
                    {displayCards()}
                </div>
                <Form handleFormInput={handleFormInput}/>
            </>
            :
            <>
                <Intro />
                <Form handleFormInput={handleFormInput}/>
            </>
        }
            
        </div>
    );
};

export default ChatBody;
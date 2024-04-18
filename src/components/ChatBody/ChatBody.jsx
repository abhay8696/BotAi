import React, { useContext } from 'react';
import { ThemeContext } from '../../AllContexts';
//styles
import "./ChatBody.css";
//assets
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import sampleData from "../../assets/sampleData.json";
//components
import ChatCard from '../ChatCard/ChatCard';
import Form from '../Form/Form';
import Intro from '../Intro/Intro';
//helper functions
import { createTimeStamp, findQuestionFromSampleData, saveChatToLocal } from '../../functions/functions';

const ChatBody = props => {
    //props
    const { currentChat, addChatMsg, clearCurrentChat } = props;
    //context
    const [theme, setTheme] = useContext(ThemeContext);
    //functions
    const handleFormInput = text => {

        // create relevant response from form input
        // create new chat cards from form input and response
        // add to currentChats

        const responseArr = findQuestionFromSampleData(sampleData, text);

        const userCard = {
            icon: icon2,
            name: "you",
            message: text,
            time: createTimeStamp(),
            id: `you-${new Date() / 1}`,
        }

        const botCard = {
            icon: icon1,
            name: "bot ai",
            message: responseArr?.[0]?.response || "something went wrong...",
            time: createTimeStamp(),
            id: `botAI-${new Date() / 1}`,
        }

        addChatMsg(userCard, botCard);
    }
    const displayCards = () => {
        if(!currentChat || !currentChat.length) return [];

        return currentChat.map(card => {
            const { icon, name, message, time, id } = card;
            return <ChatCard key={id} icon={icon} name={name} message={message} time={time}/>
        })
    }
    const saveChat = () => {
        if(!currentChat || !currentChat.length) return alert("No Conversation to save.")
        saveChatToLocal(currentChat);
        clearCurrentChat();
    }


    return (
        <div className={`ChatBody ChatBodyTheme-${theme}`}>
        {
            currentChat?.length ?
            <>
                <div className='cardsWrapper'>
                    {displayCards()}
                </div>
                <Form handleFormInput={handleFormInput} saveChat={saveChat}/>
            </>
            :
            <>
                <Intro />
                <Form handleFormInput={handleFormInput} />
            </>
        }
            
        </div>
    );
};

export default ChatBody;
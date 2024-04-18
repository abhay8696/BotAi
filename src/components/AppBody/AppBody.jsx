import React, { useContext } from 'react';
//styles
import "./AppBody.css";
//assets
import menuIcon from "../../assets/menu.svg";
//contexts
import { ThemeContext } from '../../AllContexts';
import ChatBody from '../ChatBody/ChatBody';

const AppBody = props => {
    //props
    const { handleSideBar, sidebarON, currentChat, addChatMsg } = props;
    //context
    const [theme, setTheme] = useContext(ThemeContext)

    return (
        <div className={`AppBody AppBodyTheme-${theme}`}>
            <div className='AppBodyHead'>
                {
                    !sidebarON ? <img onClick={handleSideBar} src={menuIcon} alt='menu icon' /> : null
                }
                <h1>Bot AI</h1>
            </div>
            <ChatBody addChatMsg={addChatMsg} currentChat={currentChat}/>
        </div>
    );
};

export default AppBody;
import React, { useContext } from 'react';
//styles
import "./AppBody.css";
//assets
import menuIcon from "../../assets/menu.svg";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
//contexts
import { ThemeContext } from '../../AllContexts';
import Intro from '../Intro/Intro';
import Form from '../Form/Form';
import ChatCard from '../ChatCard/ChatCard';
import ChatBody from '../ChatBody/ChatBody';

const AppBody = props => {
    //props
    const { handleSideBar, sidebarON } = props;
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
            {/* <Intro /> */}
            <ChatBody />
        </div>
    );
};

export default AppBody;
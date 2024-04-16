import React, { useContext } from 'react';
//styles
import "./SideBar.css";
//assets
import icon1 from "../../assets/icon1.png";
import penIcon from "../../assets/pen.png";
//contexts
import { ThemeContext } from '../../AllContexts';
import Button from '../Button/Button';

const SideBar = () => {
    //context
    //context
    const [theme, setTheme] = useContext(ThemeContext)

    return (
        <aside className={`SideBar SideBarTheme-${theme}`}>
            <div className={`sideBarHead sideBarHeadTheme=${theme}`}>
                <img src={icon1} alt="app icon" className='appLogo'/>
                <h2>New Chat</h2>
                <img src={penIcon} alt='pen icon' className='penIcon'/>
                
            </div>
            <div className='sideBarBody'>
                <Button text={"Past Conversations"} customClass="pastConvo"/>
            </div>
        </aside>
    );
};

export default SideBar;
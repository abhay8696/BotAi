import { useState } from 'react';

import './App.css'
import { ThemeContext } from './AllContexts';
import Button from './components/Button/Button';
import SuggestCard from './components/SuggestCard/SuggestCard';
import ChatCard from './components/ChatCard/ChatCard';


import icon1 from "./assets/icon2.png";
import Form from './components/Form/Form';
import SideBar from './components/SideBar/SideBar';
import AppBody from './components/AppBody/AppBody';

function App() {
  const [theme, setTheme] = useState("light");
  const [sidebarON, setSideBarON] = useState(false);

  //functions
  const handleSideBar = () => setSideBarON(!sidebarON);
  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
      <main>
        <SideBar handleSideBar={handleSideBar} sidebarON={sidebarON}/>
        <AppBody handleSideBar={handleSideBar} sidebarON={sidebarON}/>
      </main>
    </ThemeContext.Provider>
    </>
  )
}

export default App

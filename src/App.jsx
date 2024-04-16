import { useState } from 'react';

import './App.css'
import { ThemeContext } from './AllContexts';
import Button from './components/Button/Button';
import SuggestCard from './components/SuggestCard/SuggestCard';
import ChatCard from './components/ChatCard/ChatCard';


import icon1 from "./assets/icon2.png";
import Form from './components/Form/Form';
import SideBar from './components/SideBar/SideBar';

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
      <main>
        <SideBar />
        
      </main>
    </ThemeContext.Provider>
    </>
  )
}

export default App

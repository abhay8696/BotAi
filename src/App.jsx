import { useState } from 'react';

import './App.css'
import { ThemeContext } from './AllContexts';
import Button from './components/Button/Button';
import SuggestCard from './components/SuggestCard/SuggestCard';
import ChatCard from './components/ChatCard/ChatCard';


import icon1 from "./assets/icon2.png";

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
      <main>
        <Button text="save"/>
        <SuggestCard mainText="Hi, what is my location" subText="Get immediate AI generated response" />
        <ChatCard name="you" message="Hi There. How can I assist you today?" time="10:34 AM" icon={icon1}/>
      </main>
    </ThemeContext.Provider>
    </>
  )
}

export default App

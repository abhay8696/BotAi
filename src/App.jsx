import { useEffect, useState } from 'react';
//styles
import './App.css'
//contexts
import { ThemeContext } from './AllContexts';
//components
import SideBar from './components/SideBar/SideBar';
import AppBody from './components/AppBody/AppBody';

function App() {
  //states
  const [theme, setTheme] = useState("light");
  const [sidebarON, setSideBarON] = useState(false);
  const [currentChat, setCurrentChat] = useState([]);
  const [pastConvo, setPastConvo] = useState(false);


  //functions
  const handleSideBar = () => setSideBarON(!sidebarON);
  const newChatClick = () => {
    //save current chat to pastConversations
    //setCurrentChat to empty []
  }
  const addChatMsg = (userMsg, botReply) => {
    setCurrentChat([...currentChat, userMsg, botReply]);
  }
  const clearCurrentChat = () => setCurrentChat([]);
  const handlePastConvo = () => setPastConvo(!pastConvo);

  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
      <main>
        <SideBar handleSideBar={handleSideBar} sidebarON={sidebarON} handlePastConvo={handlePastConvo}/>
        <AppBody pastConvo={pastConvo} clearCurrentChat={clearCurrentChat} addChatMsg={addChatMsg} currentChat={currentChat} handleSideBar={handleSideBar} sidebarON={sidebarON}/>
      </main>
    </ThemeContext.Provider>
    </>
  )
}

export default App

import { useState } from 'react';

import './App.css'
import { ThemeContext } from './AllContexts';
import Button from './components/Button/Button';
import SuggestCard from './components/SuggestCard/SuggestCard';

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
      <main>
        <Button text="save"/>
        <SuggestCard mainText="Hi, what is my location" subText="Get immediate AI generated response" />
      </main>
    </ThemeContext.Provider>
    </>
  )
}

export default App

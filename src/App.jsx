import { useState } from 'react';

import './App.css'
import { ThemeContext } from './AllContexts';

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
      <main>
      </main>
    </ThemeContext.Provider>
    </>
  )
}

export default App

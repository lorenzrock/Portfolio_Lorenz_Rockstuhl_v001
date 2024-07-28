import React, {useState, createContext } from 'react'
import Nav from './nav/Nav'
import Home from './Home/Home'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch'




export const Context = React.createContext();

function App() {

  const [navIsOpen, setNavOpenState] = useState(false);



  return (
    <>
      <Context.Provider value={[navIsOpen, setNavOpenState]}>
        <ThemeSwitch />
        <Nav />
        <Home />
        <Home />
      </Context.Provider>
    </>
    
    
  )
}

export default App

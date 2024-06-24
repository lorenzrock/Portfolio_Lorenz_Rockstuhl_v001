import { useState } from 'react'
import Nav from './nav/Nav'
import Home from './Home/Home'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch'

function App() {

  return (
    <>
      <ThemeSwitch />
      <Nav />
      <Home />
    </>
    
    
  )
}

export default App

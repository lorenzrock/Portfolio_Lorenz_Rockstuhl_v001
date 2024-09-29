import React, {useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Nav from './nav/Nav'
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'

import ThemeSwitch from './ThemeSwitch/ThemeSwitch'
import Contact from './Contact/Contact'
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';
import CookiesPolicy from './CookiesPolicy/CookiesPolicy';

export const Context = React.createContext();







function App() {

  const [navIsOpen, setNavOpenState] = useState(false);



  return (
    <>
      <Context.Provider value={[navIsOpen, setNavOpenState]}>
        <Router>
          <ThemeSwitch />
          <Nav />
          <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <About />
                  <Skills />
                  <Contact />
                </>
              } />
              <Route path='/home' element={
                <>
                  <Home />
                  <About />
                  <Skills />
                  <Contact />
                </>
              } />

              <Route path='/privacy' element={
                <PrivacyPolicy />
              } />
              
              <Route path="/TermsAndConditions" element={
                <TermsAndConditions/>
              } />
              <Route path="/CookiesPolicy" element={
                <CookiesPolicy/>
              }/>
            </Routes>
        </Router>
      </Context.Provider>
    </>
    
    
  )
}

export default App

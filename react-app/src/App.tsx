import { useState } from 'react'
import './components/general.css'
import './components/header.css'
import './components/main.css'

import Header from './components/header'
import Profile from './components/Profile'
import Education from './components/Education'
import Experience from './components/Experience'


import './App.css'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {

  return (
    <>
      <Header />
      <main>
        <Profile />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import About from './Components/About'
function App() {

  return (
    <>
      <Header />
      <Main />
      <About/>
    </>
  )
}

export default App

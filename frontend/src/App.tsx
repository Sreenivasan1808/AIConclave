import { useState } from 'react'
import './App.css'
import Tab from './components/Tab'
import Hero from './components/Hero'

function App() {
  

  return (
    <div className='flex flex-col justify-center items-center min-h-fit'>
      <Hero/>
      <Tab></Tab>

    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Hero2 from './components/hero2'

const App = () => {
  return (
    <div className='body'>
      <Navbar/>
      <Hero/>
      <Hero2/>
    </div>
  )
}

export default App
import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Hero2 from './components/hero2'
import Cards from './components/Cards'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='body'>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
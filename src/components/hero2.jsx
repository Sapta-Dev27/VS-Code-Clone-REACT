import React from 'react'
import HeroImage2 from '../assets/images/heroVSCode2.png'
import HeroImage3 from '../assets/images/hero3.png'

const hero2 = () => {
  return (
    <>
    <div className='hero-2'>
      <div className='hero2-texts'>
         <h1>Code with GitHub Copilot</h1>
         <p>Write code faster and smarter with GitHub Copilot, your AI pair programmer.</p>
         <a href='' className='hero-2-link'>Try GitHub Copilot free for 30 days</a>
         <p><a href=''>Completions</a>  present suggestions automatically to help you code more efficiently.</p>
         <p><a href=' '>Copilot Chat </a>  understands the context of your code, workspace, extensions, settings, and more.</p>
         <p><a href=''>Inline Chat</a>  enables you to iteratively generate edits and get answers to quick questions, directly on your code.</p>
      </div>
      <div className='hero2-image'>
        <img src={HeroImage2} alt='No Image  Found'></img>
      </div>
    </div>
    <div className='hero3'>
      <div className='hero3-texts'>
        <h1>Code in any language</h1>
        <p>VS Code supports almost every major programming language. Several ship in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace.</p>
      </div>
      <div className='hero3-image'>
        <img src={HeroImage3} alt='NO IMAGE FOUND'></img>
      </div>
    </div>
    </>
  )
}

export default hero2
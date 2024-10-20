import React from 'react'
import HeroImage2 from '../assets/images/heroVSCode2.png'
import HeroImage3 from '../assets/images/hero3.png'
import HeroImage4 from '../assets/images/heroVSCode3.png'
import HeroImage5 from '../assets/images/heroVSCode4.png'


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
      <div className='hero-2'>
        <div className='hero2-texts'>
          <h1>Fully customizable</h1>
          <p>Customize your VS Code UI and layout so that it fits your coding style</p>
          <p><a href=''>Color themes</a>let you modify the colors in VS Code's user interface to suit your preferences and work environment.</p>
          <p><a href=' '>Settings Sync </a>enables you to share your user settings across your VS Code instances with the Settings Sync feature.</p>
          <p><a href=' '>Profiles</a>let you create sets of customizations and quickly switch between them or share them with others.</p>
        </div>
        <div className='hero2-image'>
          <img src={HeroImage4} alt='No Image  Found'></img>
        </div>
      </div>
      <div className='hero-2'>
        <div className='hero2-texts'>
          <h1>Code anywhere</h1>
          <p>Code wherever you're most productive, whether you're connected to the cloud, a remote repository, or in the browser with VS Code for the Web (vscode.dev)..</p>
      
          <p><a href=''>Built-in Source Control</a>empowers you with Git support out-of-the-box. Many other source control providers are available through extensions..</p>
          <p><a href=' '>Copilot Chat </a>provides cloud-powered development environments for any activity - whether it's a long-term project, or a short-term task like reviewing a pull request.</p>
        </div>
        <div className='hero2-image'>
          <img src={HeroImage5} alt='No Image  Found'></img>
        </div>
      </div>
    </>
  )
}

export default hero2
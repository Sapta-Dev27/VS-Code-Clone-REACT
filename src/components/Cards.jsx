import React from 'react'
import { IoTerminalOutline } from "react-icons/io5";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaCodeBranch } from "react-icons/fa6";
import { IoIosBuild } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { FaRegKeyboard } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";


const cardData = [
  {
     id: 1, 
     icons : <IoTerminalOutline/> ,
     text: 'Integrated Terminal' ,
     details : 'Use Your Favorite shell whether it is zsh , pwsh , or git bash , all inside the editor ',
  },
  {
     id: 2,
     icons : <FaCodePullRequest/>,
     text: 'Run Code' ,
     details : 'Run and debug your code without leaving your editor',
  },
  { 
    id: 3,  
    icons: <FaCodeBranch/>,
    text: 'Version Control' ,
    details : 'Built-in support for git and many other source control providers',
  },
  { 
    id: 4,  
    icons: <IoIosBuild/>,
    text: 'Built tasks' ,
    details : ' Run tools and analyze their results from within VS Code',

  },
  { 
    id: 5,  
    icons : <FaHistory/>,
    text: 'Local History',
    details :'Never lose your changes with automatically tracked local history' , 
  },
  { 
    id: 6,  
    icons : <IoIosColorPalette/>,
    text: 'Themes' ,
    details : 'Your theme is an extension of your personality. Add some flair to your editor and your touch',
  },
  { 
    id: 7,  
    icons : <FaRegKeyboard/>,
    text: 'Accessibility' ,
    details : 'Optimized experience for screen readers , high contrast themes , and keyboard-only navigation',
  },
  { 
    id: 8,  
    icons : <CiGlobe/>,
    text: 'Web Support',
    details : 'Whether you are on your phone , tablet or desktop , you can access your code from anywhere' ,
  },
];

const Card = ({ icons, text , details }) => {
  return (
    <div className='cards-container' >
      <div className='cards-icon' >{icons}</div>
      <div className='cards-text'>{text}</div>
      <div className='cards-details'>{details}</div>
      
    </div>
  );
};


const Cards = () => {
  return (
    <>
    <div className='card-heading '>
     <h1>Code with rich features</h1>
     <p>There's a lot more to an editor. Whether it's using built-in features or</p>
     <p> rich extensions, there's something for everyone</p>
      
    </div>
    <div className='cards'>

    </div>
    <div className='cards-section'>
      {cardData.map((item) => (
        <Card key={item.id} icons={item.icons} text={item.text} details={item.details} />
      ))}
    </div>
    </>
  )
}

export default Cards
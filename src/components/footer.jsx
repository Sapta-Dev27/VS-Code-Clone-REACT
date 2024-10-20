import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
      <FaXTwitter className='footer-icons-1'/>
      <FaGithub  className='footer-icons-2'/>
      <CiYoutube className='footer-icons-3'/>
      </div>
      <div className='footer-links'>
      <li><a href=''>Support</a></li>
      <li><a href=''>Privacy</a></li>
      <li><a href=''>Terms of Use </a></li>
      <li><a href=''>License</a></li>
      </div>
    </div>
  )
}

export default footer
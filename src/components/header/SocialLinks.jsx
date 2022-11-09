import React from 'react'
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/toandone"><BsLinkedin /></a>
        <a href="https://github.com/teddone"><BsGithub /></a>
        <a href="https://dribbble.com/tdondribbble"><BsDribbble /></a>
    </div>
  )
}

export default SocialLinks
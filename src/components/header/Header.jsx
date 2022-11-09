import React from 'react'
import './header.css'
import CTA from './CTA'
import SocialLinks from './SocialLinks'
import ME from '../../assets/developer.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Ted Do</h1>
        <h5 class='text-light'>Front-end Developer</h5>
      </div>
      <CTA />

      <div className="header__body">
        <SocialLinks />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
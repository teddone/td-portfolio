import React, {useEffect} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  let toShowItems = ['about', 'experience', 'services', 'contact']
  let scrollTops = [0]

  const sectionList = document.getElementsByTagName('section')
  // eslint-disable-next-line
  const arr = [...sectionList].forEach((el) => {
    if (el.id === toShowItems[0] || el.id === toShowItems[1] || el.id === toShowItems[2] || el.id === toShowItems[3]) {
      return (
        scrollTops.push(el.offsetTop)
      )
    }
  })
  
  
  useEffect(() => {
    const handleScroll = event => {
      if (window.scrollY <= scrollTops[0]) {
        setActiveNav('#')
      } else if (window.scrollY >= scrollTops[1] && window.scrollY < scrollTops[2]) {
        setActiveNav('#about')
      } else if (window.scrollY >= scrollTops[2] && window.scrollY < scrollTops[3]) {
        setActiveNav('#experience')
      } else if (window.scrollY >= scrollTops[3] && window.scrollY < scrollTops[4]) {
        setActiveNav('#services')
      } else if (window.scrollY >= scrollTops[4]) {
        setActiveNav('#contact')
      }
    };
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  });

  return (
    /*eslint-disable */

    //suppress all warnings between comments
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
      /*eslint-enable */
  )
}

export default Nav
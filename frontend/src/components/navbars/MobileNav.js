import React, {useState} from 'react'
import {
  Link
} from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import MiniLogo from '../../images/minilogo.png'


function MobileNav() {

  const [open, setOpen] = useState(false)

  const hamburger = <AiOutlineMenu fontSize='40px' 
  className='hamburger'
  onClick={()=> setOpen(!open)}
  />

  const closeHamburger = <AiOutlineClose fontSize='40px' 
  className='hamburger'
  onClick={()=> setOpen(!open)}
  />

  return (
    <>
        <nav className='nav'>
            <div className='burger-container'>
                {!open && hamburger}
                {open && closeHamburger}
                <img style={{width: '90px'}} src={MiniLogo} alt='logo'/>
            </div>
            <ul className={open ? 'toggle ul' : 'ul'}>
                <li onClick={()=> setOpen(!open)}>
                  <Link className="nav-link" style={{ textDecoration: 'none', color: 'black' }} to="/">HOME</Link>
                </li>
                <li onClick={()=> setOpen(!open)}>
                  <Link className="nav-link" style={{ textDecoration: 'none', color: 'black' }} to="/login">LOGIN</Link>
                </li>
                <li onClick={()=> setOpen(!open)}>
                  <Link className="nav-link" style={{ textDecoration: 'none', color: 'black' }} to="/register">REGISTER</Link>
                </li>
                <li onClick={()=> setOpen(!open)}>
                  <Link className="nav-link" style={{ textDecoration: 'none', color: 'black' }} to="/contact">CONTACT</Link>
                </li>
                <li onClick={()=> setOpen(!open)}>
                  <Link className="nav-link" style={{ textDecoration: 'none', color: 'black' }} to="/faq">FAQ</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default MobileNav
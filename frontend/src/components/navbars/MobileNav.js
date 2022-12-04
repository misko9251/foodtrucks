import React, {useState} from 'react'
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
                <img style={{width: '90px'}} src={MiniLogo} />
            </div>
            <ul className={open ? 'toggle ul' : 'ul'}>
                <li>HOME</li>
                <li>SIGN IN</li>
                <li>REGISTER</li>
                <li>CONTACT</li>
                <li>FAQ</li>
            </ul>
        </nav>
    </>
  )
}

export default MobileNav
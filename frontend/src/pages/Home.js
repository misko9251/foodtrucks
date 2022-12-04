import React, {useState} from 'react'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {BiMapPin} from 'react-icons/bi'
import {BsTruck} from 'react-icons/bs'
import {BsPersonPlus} from 'react-icons/bs'
// Nav Icons
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'

function Home() {

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
    <div>
        <header>

            <nav className='nav'>
                <div className='burger-container'>
                    {!open && hamburger}
                    {open && closeHamburger}
                </div>
                {open && (
                    <ul className={open ? 'toggle ul' : 'ul'}>
                        <li>VIEW TRUCKS</li>
                        <li>BECOME A VENDOR</li>
                    </ul>
                )}
            </nav>

            <div className='logo-container'>
                <img className='logo' src={Logo} alt='foodtruck logo'/>
            </div>
        </header>
        <section>
            <div>
                <div>
                    <Button logo={<BiMapPin fontSize='40px'/>} btnText='FIND FOODTRUCKS'/>
                </div>
                <div>
                    <Button logo={<BsTruck fontSize='40px' />} btnText='BROWSE ALL FOODTRUCKS'/>
                </div>
                <div>
                    <Button logo={<BsPersonPlus fontSize='40px' />} btnText='BECOME A VENDOR'/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
import React from 'react'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {BiMapPin} from 'react-icons/bi'
import {BsTruck} from 'react-icons/bs'
import {BsPersonPlus} from 'react-icons/bs'
function Home() {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li>VIEW TRUCKS</li>
                    <li>BECOME A VENDOR</li>
                </ul>
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
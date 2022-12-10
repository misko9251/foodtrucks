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
            <div className='logo-container'>
                <img className='logo' src={Logo} alt='foodtruck logo'/>
            </div>
        </header>
        <section>
            <div>
                <div>
                    <Link to='/foodtrucks' style={{textDecoration: 'none'}}>
                        <Button logo={<BiMapPin fontSize='40px' style={{color:'black'}}/>} btnText='FIND FOODTRUCKS'/>
                    </Link>
                </div>
                <div>
                    <Link to='/list' style={{textDecoration: 'none'}}>
                        <Button logo={<BsTruck fontSize='40px' style={{color: 'black'}}/> }  btnText='BROWSE ALL FOODTRUCKS'/>
                    </Link>
                </div>
                <div>
                    <Link to='/register' style={{textDecoration: 'none'}}>
                        <Button logo={<BsPersonPlus fontSize='40px'style={{color:'black'}} />} btnText='BECOME A VENDOR'/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
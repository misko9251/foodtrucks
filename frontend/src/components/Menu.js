import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
import {GrAdd} from 'react-icons/gr'
import {BiMapPin} from 'react-icons/bi'

function Menu() {
  return (
    <>
        <section>
            <div className='menu-header'>GRUB</div>
            <div className='menu-body'>
                <div className='menu-item'>EGGS  <span className='menu-price'>$2.99</span></div>
                <div className='menu-item'>TOAST  <span className='menu-price'>$1.99</span></div>
                <div className='menu-item'>SAUSAGE  <span className='menu-price'>$4.99</span></div>
                <div className='menu-item'>AVOCADO  <span className='menu-price'>$5.99</span></div>
            </div>
            <Button logo={<GrAdd fontSize='40px' style={{color:'black'}}/>} btnText='ADD SOME FOOD'/>
            <Link to='/foodtrucks' style={{textDecoration: 'none'}}>
                <Button logo={<BiMapPin fontSize='40px' style={{color:'black'}}/>} btnText='SHOW ME THE MAP!'/>
            </Link>
        </section>
    </>
  )
}

export default Menu
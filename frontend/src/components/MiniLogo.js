import React from 'react'
import Logo from '../images/minilogo.png'
import { Link } from "react-router-dom";

function MiniLogo() {
  return (
    <>
    <Link to='/'>
      <div className='form-img-container'>
          <img src={Logo} alt='alt logo' />
      </div>
    </Link>
    </>
  )
}

export default MiniLogo
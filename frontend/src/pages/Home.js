import React from 'react'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'

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
                    logo <Button btnText='FIND FOODTRUCKS'/>
                </div>
                <div>
                    logo <Button btnText='BROWSE ALL FOODTRUCKS'/>
                </div>
            </div>
        </section>



        <section>
            <h3>Become a member:</h3>
            <Link to='/registerUser'>
                <Button component={Link} to='/registerUser' btnText='FIND LOCAL TRUCKS'/>
            </Link>
            <Link to="/registerTruckOwner">
                <Button btnText='HOST YOUR TRUCKS'/>
            </Link>
        </section>
    </div>
  )
}

export default Home
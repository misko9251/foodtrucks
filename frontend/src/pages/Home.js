import React from 'react'
import Button from '../components/Button'
import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
        <header>
            <h1>716 Food Trucks</h1>    
        </header>
        <section>
            <h3>Become a member:</h3>
            <Link path="/registerUser">
                <Button btnText="FIND LOCAL TRUCKS"/>
            </Link>
            <Link path="/registerTruckOwner">
                <Button btnText="HOST YOUR TRUCKS"/>
            </Link>
        </section>
    </div>
  )
}

export default Home
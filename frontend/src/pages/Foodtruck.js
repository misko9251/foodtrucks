import React from 'react'
import FormInput from '../components/FormInput'

function Foodtruck() {
  return (
    <>
    <div>Foodtruck</div>
    <FormInput 
    type='text'
    placeholder='Name of truck'
    />
    <FormInput 
    type='text'
    placeholder='Latitude'
    />
    <FormInput 
    type='text'
    placeholder='Longitude'
    />
    </>
  )
}

export default Foodtruck
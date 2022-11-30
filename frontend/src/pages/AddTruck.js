import React, {useState, useEffect} from 'react'
import Foodtrucks from './Foodtrucks'

function AddTruck() {

    const [formData, setFormData] = useState({
        name: '',
        lat: '',
        lng: ''
    })

    console.log(formData)

    const onChange = (e) => {
        setFormData((prevValue)=>{
            return {
                ...prevValue,
                [e.target.name]: e.target.value
            }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
        const formInfo = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }
            const response = await fetch('http://localhost:2006/trucks/addTruck', formInfo)
            const json = await response.json()
            console.log(json)
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <>
        <header>
            <h1>Add your truck below</h1>
        </header>
        <section>
            <form onSubmit={onSubmit}>
                <input
                name='name'
                type='text'
                placeholder='Your foodtruck name'
                value={formData.name}
                onChange={onChange}
                />
                <input 
                name='lat'
                type='text'
                placeholder="Enter your truck's latitude"
                value={formData.lat}
                onChange={onChange}
                />
                <input 
                name='lng'
                type='text'
                placeholder="Enter your truck's longitude"
                value={formData.lng}
                onChange={onChange}
                />
                <button>Submit</button>
            </form>
        </section>
    </>
  )
}

export default AddTruck
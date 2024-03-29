import React, {useState, useEffect} from 'react'
import {GrFormEdit} from 'react-icons/gr'
import Spinner from './Spinner'
import {GrFormClose} from 'react-icons/gr'

function AcctMgrHeader() {

    // Save user info to properly load profile/dashboard
    const [userInfo, setUserInfo] = useState({})
    // Check to see whether or not user would like to change the trucks address
    const [changeAddress, setChangeAddress] = useState(false)
    // Form to update address
    const [formData, setFormData] = useState({
        coordinates: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    })
    const [loading, setLoading] = useState(true)

    // Grab truck information and save in state
    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await fetch(
                    'http://localhost:2006/trucks/getMyTruck',
                    {credentials: 'include'}
                );
                const json = await response.json()
                setUserInfo(json.trucks[0])
                setLoading(false)
            } catch (error) {
                
            }
        }
        fetchData()
    })

    // Change state to display form if user would like to change address
    function toggleAddress(){
        setChangeAddress(!changeAddress)
    }

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
        const address = `${formData.address} ${formData.city} ${formData.state} ${formData.zip}`
        console.log(address)
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAM_ZDWScTtrIjcZGGgrGSv-HC3PYz3u0U`
        )
        const data = await response.json()
        const coords = (data.results[0].geometry.location)
        postToDB(coords)
        console.log(data)
    }

    async function postToDB(coordinates){
        try {
            const formInfo = {
                credentials: 'include',
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...formData, coordinates})
            }
                const response = await fetch(`http://localhost:2006/trucks/updateTruck/${userInfo._id}`, formInfo)
                const json = await response.json()
                if(response.ok){
                    setChangeAddress(false)
                }
                console.log(json)
            } catch (error) {
                console.log(error)
            }
    }

    return (
      <>
      {loading && (
        <Spinner />
      )}
          <header className='acct-mgr-header'>
              <h1 style={{margin: '5%'}}>Account Manager</h1>
              <img width='300px' src={userInfo.image} alt='truck-logo'/>
              <h1 style={{fontSize: '2rem', marginTop: '5%', textAlign: 'center'}}>{userInfo.name}</h1>
              <p>{userInfo.address}, {userInfo.city}, {userInfo.state} {userInfo.zip} <span onClick={toggleAddress}><GrFormEdit /></span></p>
              {changeAddress && (
                <>
                    <form className='basic-form' onSubmit={onSubmit}>
                    <div className='close-form' onClick={toggleAddress}><GrFormClose /></div>
                    <legend>UPDATE ADDRESS</legend>
                        <input 
                        name='address'
                        type='text'
                        placeholder="Enter your truck's address"
                        value={formData.address}
                        onChange={onChange}
                        />
                        <input 
                        name='city'
                        type='text'
                        placeholder="Enter your truck's city"
                        value={formData.city}
                        onChange={onChange}
                        />
                        <input 
                        name='state'
                        type='text'
                        placeholder="Enter your truck's state"
                        value={formData.state}
                        onChange={onChange}
                        />
                        <input 
                        name='zip'
                        type='number'
                        placeholder="Enter your truck's zip"
                        value={formData.zip}
                        onChange={onChange}
                        />
                        <button>Submit</button>
                    </form>
                </>
              )}
          </header>
      </>
    )
}

export default AcctMgrHeader
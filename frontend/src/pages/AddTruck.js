import React, {useState} from 'react'
import MiniLogo from '../images/minilogo.png'
import {
    Link,
    redirect,
    useNavigate
  } from "react-router-dom";
import Spinner from '../components/Spinner';

function AddTruck() {

    const [formData, setFormData] = useState({
        name: '',
        coordinates: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cuisine1: '',
        cuisine2: ''
    })
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [loading, setLoading] = useState(false)

    const onChange = (e) => {
        setFormData((prevValue)=>{
            return {
                ...prevValue,
                [e.target.name]: e.target.value
            }
        })
        const file = e.target.files[0];
        previewFile(file);
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };
  
    const onSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const address = `${formData.address} ${formData.city} ${formData.state} ${formData.zip}`
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
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...formData, coordinates, previewSource})
            }
                const response = await fetch('http://localhost:2006/trucks/addTruck', formInfo)
                const json = await response.json()
                if(response.ok){
                    setLoading(false)
                    redirect()
                }
            } catch (error) {
                console.log(error)
            }
    }

    const navigate = useNavigate();

    // Redirect functions
    function redirect(){
      navigate('/accountmanager')
    }

  return (
    <>
        <section className='form-container'>
        {loading && <Spinner />}
        {previewSource ? (
                <section>
                    <div style={{textAlign: 'center'}}>
                        <h3>This photo will be used to represent your truck</h3>
                        <img alt='preview' src={previewSource} style={{height: '200px'}} />
                    </div>
                </section>
            ) : (
                <Link to='/'>
                    <div className='form-img-container'>
                        <img src={MiniLogo} alt='alt logo' />
                    </div>
                </Link>
            ) 
            }
            <form className='login-register-form' onSubmit={onSubmit}>
            <legend style={{marginBottom: '3%', fontSize: '1.3rem'}}>Add your truck information</legend>
                <input
                name='name'
                type='text'
                placeholder='Your foodtruck name'
                value={formData.name}
                onChange={onChange}
                />
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
                <input
                name='cuisine1'
                type='text'
                placeholder='Cuisine Type (e.g. Tacos)'
                value={formData.cuisine1}
                onChange={onChange}
                />
                <input
                name='cuisine2'
                type='text'
                placeholder='Cuisine Type (e.g. Greek)'
                value={formData.cuisine2}
                onChange={onChange}
                />
                <label>Truck Photo</label>
                <input
                id="fileInput"
                type="file"
                name="image"
                onChange={onChange}
                value={fileInputState}
                className="form-input"
                />
                {!loading && <button>Submit</button>}
            </form>
        </section>
    </>
  )
}

export default AddTruck
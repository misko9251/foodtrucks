import React, {useState, useEffect} from 'react'
import Foodtrucks from './Foodtrucks'

function AddTruck() {

    const [formData, setFormData] = useState({
        name: '',
        coordinates: '',
        address: ''
    })
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');

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
        e.preventDefault()
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${formData.address}&key=AIzaSyAM_ZDWScTtrIjcZGGgrGSv-HC3PYz3u0U`
        )
        const data = await response.json()
        const coords = (data.results[0].geometry.location)
        postToDB(coords)
    }

    async function postToDB(coordinates){
        try {
            const formInfo = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...formData, coordinates, previewSource})
            }
                const response = await fetch('http://localhost:2006/trucks/addTruck', formInfo)
                const json = await response.json()
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
                name='address'
                type='text'
                placeholder="Enter your truck's address"
                value={formData.address}
                onChange={onChange}
                />
                <input
                id="fileInput"
                type="file"
                name="image"
                onChange={onChange}
                value={fileInputState}
                className="form-input"
                />
                <button>Submit</button>
            </form>
            {previewSource && (
                <img src={previewSource} style={{height: '300px'}} />
            )}
        </section>
    </>
  )
}

export default AddTruck
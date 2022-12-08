import React, {useState} from 'react'

function AddTruck() {

    const [formData, setFormData] = useState({
        name: '',
        coordinates: '',
        address: '',
        city: '',
        state: '',
        zip: ''
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
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...formData, coordinates, previewSource})
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
        <section>
            <legend>Add your truck information</legend>
            <form className='basic-form' onSubmit={onSubmit}>
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
                <section>
                    <h3>This photo will be used to represent your truck</h3>
                    <img alt='preview' src={previewSource} style={{height: '300px'}} />
                </section>
            )}
        </section>
    </>
  )
}

export default AddTruck
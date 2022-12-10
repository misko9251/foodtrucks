import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import MiniLogo from '../images/minilogo.png'
import {
    Link
  } from "react-router-dom";

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

    const onChange = (e) => {
        setFormData((prevVal)=>{
            return{
                ...prevVal,
                [e.target.name]: e.target.value
            }
        })
    }

    const navigate = useNavigate();

    function redirect(){
        navigate('/accountmanager')
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const formInfo = {
                credentials: 'include',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email: formData.email, password: formData.password})

            }
            const response = await fetch('http://localhost:2006/auth/loginVendor', formInfo)
            const json = await response.json()
            if(json.message === 'Email not found' || json.message === 'Password incorrect' || json.message === 'Missing credentials'){
                setError(json.message)
            }if(json.message === 'Success'){
                redirect()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <>
        <section className='form-container'>
        <Link to='/'>
          <div className='form-img-container'>
              <img src={MiniLogo} alt='alt logo' />
          </div>
        </Link>
            <form className='login-register-form' onSubmit={onSubmit}>
                <h2>Vendor Login</h2>
                {error !== '' && <p>{error}</p>}
                <input 
                type='text'
                name='email'
                value={formData.email}
                placeholder='Email'
                onChange={onChange}
                />
                <input 
                type='password'
                name='password'
                value={formData.password}
                placeholder='Password'
                onChange={onChange}
                />
                <button>Login</button>
            </form>
        </section>
      </>
    )
}

export default Login
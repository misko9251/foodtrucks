import React, {useState} from 'react'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    console.log(formData)

    const onChange = (e) => {
        setFormData((prevVal)=>{
            return{
                ...prevVal,
                [e.target.name]: e.target.value
            }
        })
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
            console.log(json)
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <>
        <section>
            <form onSubmit={onSubmit}>
                <h2>Vendor Login</h2>
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
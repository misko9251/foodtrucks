import React, {useState} from 'react'
import FormInput from '../components/FormInput'

function Register() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  })

  const onChange = (e) => {
    e.preventDefault()
    setFormData((prevValue)=>{
      return {
        ...prevValue,
        [e.target.name]: e.target.value
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section>
        <form onSubmit={onSubmit}>
          <h2>Truck Vendor Registration</h2>
          <FormInput
          type='text'
          value={formData.firstName}
          placeholder='First name' 
          name='name'
          onChange={onChange}
          />
          <FormInput
          type='text'
          value={formData.lastName}
          placeholder='Last name' 
          name='username'
          onChange={onChange}
          />
          <FormInput
          type='text'
          value={formData.email}
          placeholder='Email' 
          name='password'
          onChange={onChange}
          />
          <FormInput 
          type='password'
          value={formData.password}
          placeholder='Password'
          name='password2'
          onChange={onChange}
          />
          <FormInput 
          type='password'
          value={formData.password2}
          placeholder='Confirm password'
          name='password2'
          onChange={onChange}
          />
          <button>Submit</button>
        </form>
      </section>
    </>
  )
}

export default Register
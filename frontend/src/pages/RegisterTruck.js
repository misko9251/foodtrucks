import React, {useState} from 'react'
import FormInput from '../components/FormInput'

function RegisterTruck() {

  const [formData, setFormData] = useState({
    name: '',
    username: '',
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

  return (
    <>
      <section>
        <form>
          <h2>Register</h2>
          <FormInput
          type='text'
          value={formData.name}
          placeholder='Enter your first and last name' 
          name='name'
          onChange={onChange}
          />
          <FormInput
          type='text'
          value={formData.username}
          placeholder='Enter a username' 
          name='username'
          onChange={onChange}
          />
          <FormInput
          type='password'
          value={formData.password}
          placeholder='Enter password' 
          name='password'
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

export default RegisterTruck
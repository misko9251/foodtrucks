import React, {useState} from 'react'

function Contact() {

    const [status, setStatus] = useState('Send')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    console.log(formData)

    const onChange = (e) => {
        setFormData((prevVal)=> {
            return {
                ...prevVal,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('Sending...')
        try {
            const response = await fetch('http://localhost:2006/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(formData)
            })
            setStatus('Send')
            let result = await response.json()
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <>
          <section className='contact-section'>
              <h1>LET'S CHAT!</h1>
              <p>We can't wait to discuss your business needs and answer any of your questions. Enter your details below and we will get back to you as soon as possible.</p>
              <p>We all love a tasty foodtruck upstate!</p>
              <button>Add Details</button>
          </section>
          <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                    type='text'
                    name='name'
                    id='name'
                    onChange={onChange}
                    value={formData.name}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                    type='text'
                    name='email'
                    id='name'
                    onChange={onChange}
                    value={formData.email}
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea 
                    type='text'
                    name='message'
                    id='message'
                    onChange={onChange}
                    value={formData.message}
                    />
                </div>
                <button>{status}</button>
            </form>
          </section>
      </>
    )
}

export default Contact
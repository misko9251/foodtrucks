import React from 'react'

function RegistrationInput (props) {
  return (
    <>
      <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      />
    </>
  )
}

export default RegistrationInput
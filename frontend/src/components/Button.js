import React from 'react'

function Button(props) {
  return (
    <div className='btn-container-home'>
      <div className='btn-logo'>{props.logo}</div><button>{props.btnText}</button>
    </div>
  )
}

export default Button
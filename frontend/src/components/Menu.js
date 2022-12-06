import React from 'react'

function Menu() {
  return (
    <>
        <section>
            <div className='menu-header'>Menu</div>
            <div className='menu-body'>
                <div className='menu-item'>Eggs ... <span className='menu-price'>$2.99</span></div>
                <div className='menu-item'>Toast ... <span className='menu-price'>$1.99</span></div>
                <div className='menu-item'>Sausage ... <span className='menu-price'>$4.99</span></div>
                <div className='menu-item'>Avocado ... <span className='menu-price'>$5.99</span></div>
            </div>
        </section>
    </>
  )
}

export default Menu
import React from 'react'

function VendorProfile(props) {
    const truckData = props.data.truck[0]
    const menuItems = props.data.menu.map((item, index)=> {
        return (
          <div key={index} className='menu-item'>{item.food}  <span className='menu-price'>${item.price}</span></div>
        )
      })

      function handleClick(){
        window.location.reload()
      }

    return (
        <>
            <header style={{margin: '5%'}} className='acct-mgr-header'>
                <img width='300px' src={truckData.image} alt='truck-logo'/>
                <h1 style={{fontSize: '2rem', marginTop: '5%', textAlign: 'center'}}>{truckData.name}</h1>
                <p>{truckData.address}, {truckData.city}, {truckData.state} {truckData.zip}</p>
            </header>
            <section>
                <div className='menu-header'>GRUB</div>
                <div className='menu-body'>{menuItems}</div>
            </section>
            <div style={{textAlign: 'center', marginTop: '10%'}}>
                <button onClick={handleClick} style={{borderRadius: '5px'}}>BACK TO LIST</button>
            </div>
        </>

    )
}

export default VendorProfile
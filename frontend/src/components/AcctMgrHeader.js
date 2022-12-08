import React, {useState, useEffect} from 'react'

function AcctMgrHeader() {

    const [userInfo, setUserInfo] = useState({})

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await fetch(
                    'http://localhost:2006/trucks/getMyTruck',
                    {credentials: 'include'}
                );
                const json = await response.json()
                setUserInfo(json.trucks[0])
            } catch (error) {
                
            }
        }
        fetchData()
    })

    return (
      <>
          <header className='acct-mgr-header'>
              <h1 style={{margin: '5%'}}>Account Manager</h1>
              <img width='300px' src={userInfo.image} alt='truck-logo'/>
              <h1 style={{fontSize: '2rem', marginTop: '5%', textAlign: 'center'}}>{userInfo.name}</h1>
              <p>{userInfo.address}, {userInfo.city}, {userInfo.state} {userInfo.zip}</p>
              <button className='update-truck-btn'>Update Truck Location!</button>
              <form>
                <input
                type='text'
                placeholder='Address of truck'
                />
                <button>Update</button>
              </form>
          </header>
      </>
    )
}

export default AcctMgrHeader
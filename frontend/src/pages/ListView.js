import React, { useEffect, useState } from 'react'

function ListView() {

    const [allTrucks, setAllTrucks] = useState([])

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await fetch(
                    'http://localhost:2006/trucks/getTrucks',
                    {credentials: 'include'}
                )
                const json = await response.json()
                setAllTrucks(json.trucks)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    })

    const list = allTrucks.map((item, index)=> (

            <div key={index} style={{paddingBottom: '3%', borderBottom: '10px solid rgb(44,104,246)', borderTop: '10px solid gray'}}>
                <div style={{position: 'relative'}}>
                    <div style={{position: 'absolute', top: '10px', left: '10px', border: '2px solid black', background: 'white', padding: '2%'}}>
                        {
                            // Check how many days truck vendor has been with application
                            Math.round((new Date(Date.now()).getTime() - new Date(item.createdAt).getTime()) / (1000 * 3600 * 24))
                        } {Math.round((new Date(Date.now()).getTime() - new Date(item.createdAt).getTime()) / (1000 * 3600 * 24)) === 1 ? 'day' : 'days'} on S.T.F.U.
                    </div>
                    <img style={{maxHeight: '100%', maxWidth: '100%'}} src={item.image}/>
                </div>
                <div>
                    <h1 style={{fontSize: '2rem', margin: '2% 0', paddingLeft: '2%'}}>{item.name}</h1>
                    <h3 style={{padding: '3% 0 1% 2%'}}>{item.address}, {item.city}, {item.state} {item.zip}</h3>
                    <h3 style={{padding: '3% 0 1% 2%'}}>Cuisine Type: {item.cuisine1}, {item.cuisine2}</h3>
                </div>
            </div>
        
    ))


    return (
      <>
          <section>
            {list}
          </section>
      </>
    )
}

export default ListView
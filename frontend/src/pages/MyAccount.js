import React, {useState, useEffect} from 'react'
import AcctMgr from './AcctMgr'
import AddTruck from './AddTruck'
import Spinner from '../components/Spinner'

function MyAccount() {

    const [hasTruck, setHasTruck] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await fetch(
                    'http://localhost:2006/trucks/getMyTruck',
                    {credentials: 'include'}
                );
                const json = await response.json()
                setHasTruck(json.trucks.length > 0)
                setLoading(false)
            } catch (error) {
                
            }
        }
        fetchData()
    })

    return (
        <>
        {loading && <Spinner />}
        {hasTruck ? <AcctMgr /> : <AddTruck />}
        </>
    )
}

export default MyAccount
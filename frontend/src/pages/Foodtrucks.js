import React, {useState, useEffect} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'

 
function Foodtrucks(props) {

  const [trucks, setTrucks] = useState([])
  
  useEffect(()=>{
    async function fetchData(){
      try {
        const response = await fetch(
          'http://localhost:2006/trucks/getTrucks',
        );
        const json = await response.json()
        setTrucks(json.trucks)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

    const [state, setState] = useState({
      showingInforWindow: false,
      activeMarker: {},
      selectedPlace: {}
    })

    const onMarkerClick = (props, marker, e) => {
      setState({
        selectedPlace: props.name,
        activeMarker: marker,
        showingInforWindow: !state.showingInforWindow
      })
    }  

    const Markers = trucks.map((item, index)=>{
      let latitude = item.coordinates.lat
      let longitude = item.coordinates.lng
      return(
        <Marker 
        key={index}
        name={item.name} 
        position={{lat: latitude, lng: longitude}} 
        onClick={onMarkerClick}
        />
      )
    })

    return (
      <>
      <Map
      google = {props.google}
      style = {{width: "50%", height: "50%"}}
      zoom = {10}
      initialCenter={{ lat: 42.886448, lng: -78.878372}}
      >
          {Markers}
          <InfoWindow
          marker={state.activeMarker}
          visible={state.showingInforWindow}
          >
            <div>
              <h1>{state.activeMarker.name}</h1>
            </div>
          </InfoWindow>

      </Map>
      </>
    );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBmfPiMXGZERuHwbIDrWMyS-lKBG0jDvik'
})(Foodtrucks)


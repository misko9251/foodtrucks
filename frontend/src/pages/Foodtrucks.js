import React, {useState} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'

 
function Foodtrucks(props) {

    const [state, setState] = useState({
      showingInforWindow: false,
      activeMarker: {},
      selectedPlace: {}
    })

    const onMarkerClick = (props, marker, e) => {
      console.log(props)
      setState({
        selectedPlace: props.name,
        activeMarker: marker,
        showingInforWindow: !state.showingInforWindow
      })
    }

    return (
    <Map
      google = {props.google}
      style = {{width: "50%", height: "50%"}}
      zoom = {10}
      initialCenter={{ lat: 42.886448, lng: -78.878372}}
      >
        <Marker 
        name='Queen City Food Truck' 
        position={{ lat: 42.886448, lng: -78.878372}} 
        onClick={onMarkerClick}
        />
          <InfoWindow
          marker={state.activeMarker}
          visible={state.showingInforWindow}
          >
            <div>
              <h1>{state.selectedPlace}</h1>
            </div>
          </InfoWindow>
      </Map>
    );
}

export default GoogleApiWrapper({
  apiKey: ''
})(Foodtrucks)
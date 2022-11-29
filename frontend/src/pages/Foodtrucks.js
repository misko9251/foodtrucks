import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react'

 
function Foodtrucks(props) {
    return (
      <Map
      google = {props.google}
      style = {{width: "50%", height: "50%"}}
      zoom = {10}
      initialCenter={{ lat: 42.886448, lng: -78.878372}}
      />
    );
}

export default GoogleApiWrapper({
  apiKey: ''
})(Foodtrucks)
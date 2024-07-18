import { GoogleMap, Marker } from '@react-google-maps/api'
import React from 'react'
import markerImage from './mapicon.png'

// import Mapstyle from './Mapstyle'

import Mapstyle from './Mapstyle'
import { useWindowWide } from '../../../hooks/ScreenSize'


 
function Map() {

  const desktop = useWindowWide(1024)

 const center = {
  lat: -3.745,
  lng: -38.523
};

  const mapContainerStyle = {
    width: desktop ?'40vw' : "100%",
    height: '45vh'
  }

  const options = {
    styles: Mapstyle,
    disableDefaultUI: true,
    zoomControl: false,
  }

  return (
    <>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerStyle={mapContainerStyle}
        options={options}
      >
        <Marker
          position={center}
          icon={{
            url: markerImage.src, 
          }}
        />
      </GoogleMap>
    </>
  )
}

export default Map
import { GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";
import markerImage from "./Icon map-map-pin.svg";

// import Mapstyle from './Mapstyle'

import Mapstyle from "./Mapstyle";
import { useWindowWide } from "../../../hooks/ScreenSize";

function Map() {
  const desktop = useWindowWide(1024);

  const center = {
    lat:25.211609932247228,
    lng: 55.28030908247188,
  };

  const mapContainerStyle = {
    width: "100%",
    height: desktop ? "100%" : "400px",
  };

  const options = {
    styles: Mapstyle,
    disableDefaultUI: true,
    zoomControl: false,
  };

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
            url: markerImage.src, // Use .src to get the string URL
          }}
        />
      </GoogleMap>
    </>
  );
}

export default Map;
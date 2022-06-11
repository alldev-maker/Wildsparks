import React, { useState } from "react"
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api"
import VendorBox from "../where-to-buy/vendor-box"

const Map = ({ vendors }) => {
  const google = window.google
  const markers = vendors.map((item, idx) => ({
    id: idx + 1,
    name: item.data.name,
    position: {
      lat: item.data.location.latitude,
      lng: item.data.location.longitude,
    },
    image: item.data.image,
    address: item.data.address,
  }))

  const [activeMarker, setActiveMarker] = useState(null)

  const handleActiveMarker = marker => {
    if (marker === activeMarker) {
      return
    }
    setActiveMarker(marker)
  }

  const handleOnLoad = map => {
    const bounds = new google.maps.LatLngBounds()
    markers.forEach(({ position }) => bounds.extend(position))
    map.fitBounds(bounds)
  }

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100%", height: "555px" }}
    >
      {markers.map(item => (
        <Marker
          key={item.id}
          position={item.position}
          onClick={() => handleActiveMarker(item.id)}
        >
          {activeMarker === item.id ? (
            <InfoWindow>
              <VendorBox vendor={item} />
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  )
}

export default Map

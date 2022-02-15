import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { useState } from 'react'
import { getCenter } from 'geolib'
import { LocationMarkerIcon } from '@heroicons/react/outline'

const Map = ({ places })=>{
  const api_token = JSON.parse(process.env.mapbox_token)

  const [selectedLocation, setSelectedLocation] = useState({})

  const coordinates = places.map(item =>({
    longitude: item.long,
    latitude: item.lat,
  }))

  const center = getCenter(coordinates)

  const [viewPort, setViewPort] = useState({
      width: '100%',
      height: '100%',
      longitude: center.longitude,
      latitude: center.latitude,
      zoom: 11,
  })

  return (
    <ReactMapGL
              mapStyle="mapbox://styles/wadaln3ma/ckzn1qseg00hq14l8era47fi3" 
              mapboxAccessToken={api_token}
              {...viewPort}
              onViewPortChange={nextViewPort => setViewPort(nextViewPort)}>

      {places.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={0}
                        offsetTop={0}
                    >
                        <p onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce">
                            <LocationMarkerIcon className="h-6 text-red-500"/>
                        </p>
                    </Marker>

                    {/* Popup to be shown once we click on the marker */}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            <div>
                                {result.title}
                            </div>
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
      
    </ReactMapGL> 
)}

export default Map

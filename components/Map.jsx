import ReactMapGL from 'react-map-gl'
import { useState } from 'react' 

const Map = ()=>{
  const api_token = JSON.parse(process.env.mapbox_token)
  const [viewPort, setViewPort] = useState({
      width: '100%',
      height: '100%',
      longitude: 27.14,
      latitude: 15.45,
      zoom: 11,
  })

  return (
    <ReactMapGL
              mapStyle="mapbox://styles/wadaln3ma/ckzn1qseg00hq14l8era47fi3" 
              mapboxAccessToken={api_token}
              {...viewPort}
              onViewPortChange={nextViewPort => setViewPort(nextViewPort)}>
      
    </ReactMapGL> 
)}

export default Map

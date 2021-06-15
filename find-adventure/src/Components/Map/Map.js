import React from 'react'
import mapboxgl from 'mapbox-gl'
import { useRef, useEffect, useState} from 'react'

export default function Map() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY25hdmVsaXRlIiwiYSI6ImNrcHg2bjlvbjF5NzAyb3F2NHh0dXQ5ZTAifQ.v4VyFJIRseEU-oxjFcUQLw'

  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-123.1);
  const [lat, setLat] = useState(44.04);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2))
  })
  return () => map.remove();
}, []);

  return (
    <div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  )
}

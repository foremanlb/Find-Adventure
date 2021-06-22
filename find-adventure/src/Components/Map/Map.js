import React from 'react'
import mapboxgl from 'mapbox-gl'
import { useRef, useEffect, useState } from 'react'
import './Map.css'

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

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      fitBoundsOptions: {maxZoom: 13},
      trackUserLocation: true
    }));
    
    new mapboxgl.Marker()
      .setLngLat([-123.10587957989165, 44.06802185])
      .setPopup(new mapboxgl.Popup().setHTML("<h1>Valley River Center</h1>"))
      .addTo(map)
      

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

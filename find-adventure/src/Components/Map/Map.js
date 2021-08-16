import React from 'react'
import mapboxgl from '!mapbox-gl'// eslint-disable-line
import { useRef, useEffect, useState } from 'react'
import './Map.css'

export default function Map(props) {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY25hdmVsaXRlIiwiYSI6ImNrcHg2bjlvbjF5NzAyb3F2NHh0dXQ5ZTAifQ.v4VyFJIRseEU-oxjFcUQLw'

  const mapContainerRef = useRef(null);
  const lng = props.lng
  const lat = props.lat
  const zoom = props.zoom
  const setLng = props.setLng
  const setLat = props.setLat
  const setZoom = props.setZoom

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    }, []);

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      fitBoundsOptions: {maxZoom: 13},
      trackUserLocation: true
    }));
    
    props.places.forEach((place) => {
      const placeStreet = place.properties.street.replace(/ /g, '+')
      new mapboxgl.Marker()
      .setLngLat([place.properties.lon, place.properties.lat])
      .setPopup(new mapboxgl.Popup().setHTML(`<h1>${place.properties.name}</h1><br><a href='http://maps.apple.com/?daddr=${place.properties.housenumber}+${placeStreet}+${place.properties.city}+${place.properties.state}' target='blank' rel='noreferrer noopener'>${place.properties.housenumber} ${place.properties.street}, ${place.properties.city}, ${place.properties.state} ${place.properties.postcode}</a>`))
      .addTo(map)
    })
      
    map.setCenter([lng, lat]);
    
    map.setZoom(zoom)

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2))
  })
    return () => map.remove();
    
    
    
  }, [props.places, props.resetMap]);

  return (
    <div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  )
}

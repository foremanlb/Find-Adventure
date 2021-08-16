import React from 'react'

export default function ResultsList(props) {
  

  return (
    <div>
      {props.places.map((place) => {
        const handleClick = () => {
          props.setLng(place.properties.lon)
          props.setLat(place.properties.lat)
          props.setZoom(17)
          props.setResetMap(!props.resetMap)
        }
        return (
          <div key={place.properties.place_id}>
            <h4>{place.properties.name}</h4>
            <p>{place.properties.housenumber} {place.properties.street}<br></br>{place.properties.city}, {place.properties.state} {place.properties.postcode}</p>
            <button type='button' className='marker-zoom' onClick={handleClick}>Take Me</button>
          </div>
      )})
      }
    </div>
  )
}

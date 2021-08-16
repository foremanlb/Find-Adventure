import React from 'react'

export default function ResultsList(props) {
  return (
    <div>
      {props.places.map((place) => {
        return (
          <div>
            <h4>{place.properties.name}</h4>
          </div>
      )})
      }
    </div>
  )
}

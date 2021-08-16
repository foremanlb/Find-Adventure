import React from 'react'
import './Results.css'
import ResultsList from '../ResultsList/ResultsList'

export default function Results(props) {
  const handleClick = () => {
    props.setResultsIsActive(!props.resultsIsActive)
  }

  return (
    <div className={props.resultsIsActive ? 'results-large' : 'results-small'}>
      <div>
        <ResultsList places={props.places}
          setLng={props.setLng} setLat={props.setLat} setZoom={props.setZoom}
          setResetMap={props.setResetMap} resetMap={props.resetMap}/>
      </div>
      <button type='button' className='resultsTab' onClick={handleClick}>
        <div className={props.resultsIsActive ? 'arrow-left' : 'arrow-right'}></div>
      </button>
      
    </div>
  )
}

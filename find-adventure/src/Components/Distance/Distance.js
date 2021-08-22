import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Distance(props) {
  return (
    <div id='distance-div'>
      <FontAwesomeIcon icon='caret-down' />
      <button className='dropdown-button'>Distance</button>
      <br></br>
      <div id='distance-dropdown-menu'>
        <input type='radio' name='distance' value='' className='selection'/>
        <label></label>
        </div>
    </div>
  )
}

import React from 'react'
import './Accommodation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Accommodation(props) {
  return (
    <div id='accommodation-div'>
        <FontAwesomeIcon icon='caret-down' />
      <button className='dropdown-button'>Accommodation</button>
      <br></br>
        <div className='dropdown-menu'>
        <label>
          <input type='checkbox' name='hotel' value='hotel' className='selection' />Hotel
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='hut' value='hut' className='selection' />Hut
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='apartment' value='apartment' className='selection' />Apartment
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='chalet' value='chalet' className='selection' />Chalet
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='guest_house' value='guest_house' className='selection' />Guest House
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='hostel' value='hostel' className='selection' />Hostel
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='motel' value='motel' className='selection' />Motel
        </label>
        </div>
    </div>
  )
}

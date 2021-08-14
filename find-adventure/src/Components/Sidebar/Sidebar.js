import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {baseURL} from '../../Services/apiConfig'
import './Sidebar.css'
import Accommodation from '../Accommodation/Accommodation'

export default function Sidebar(props) {
  const finalURL = props.finalURL
  const setFinalURL = props.setFinalURL
  const [places, setPlaces] = useState([])
  const [categoryURL, setCategoryURL] = useState(``)
  const [categories, setCategories] = useState({
    accommodation: [],
    activity: [],
    airport: [],
    amenity: [],
    beach: [],
    building: [],
    camping: [],
    catering: [],
    childcare: [],
    commercial: [],
    education: [],
    entertainment: [],
    healthcare: [],
    leisure: [],
    national_park: [],
    natural: [],
    parking: [],
    pet: [],
    public_services: [],
    public_transportation: [],
    rental: [],
    ski: [],
    sport: [],
    tourism: []
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    searchCategories()
    if (categoryURL !== '') {
      const res = await axios.get(`${baseURL}${finalURL}&categories=${categoryURL}`)
      setPlaces(res.data.features)
    }
  }

  const searchCategories = () => {
    let categorySearch = ``
    for (const [key, value] of Object.entries(categories)) {
      if (value.length > 0) {
        value.map((item) => {
          categorySearch = `${categorySearch},${key}.${item}`
          return categorySearch
        })
      }
    }
    const fixedCategory = categorySearch.slice(1)
    setCategoryURL(fixedCategory)
  }

  const handleClick = () => {
    props.setMenuIsActive(!props.menuIsActive)
  }

  return (
    <div className={props.menuIsActive ? 'sidebar-small' : 'sidebar-large'}>
      <form className={props.menuIsActive ? 'filter-list-hidden' : 'filter-list'}>
        <Accommodation
          accommodationIsActive={props.accommodationIsActive} setAccommodationIsActive={props.setAccommodationIsActive}
          finalURL={finalURL} setFinalURL={setFinalURL}
          setCategories={setCategories} categories={categories}
        />
        {/* <button className='dropdown-button'>Commercial</button>
        <div className={props.isActive ? 'arrow-right' : 'arrow-left'} id='dropdown-arrow'></div>
        <label for='commercial'>
          <input type='checkbox' name='commercial' value='commercial' className='selection' />Commercial
        </label>
        <input type='checkbox' name='accommodation' value='accommodation' className='selection'></input>
        <label for='accommodation'>accommodation</label>
        <input type='checkbox' name='activity' value='activity' className='selection'></input>
        <label for='activity'>activity</label>
        <input type='checkbox' name='catering' value='catering' className='selection'></input>
        <label for='catering'>catering</label> */}
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
        <button type='button' className='menu' onClick={handleClick}>
        <div className={props.menuIsActive ? 'arrow-right' : 'arrow-left'}></div>
      </button>
    </div>
  )
}

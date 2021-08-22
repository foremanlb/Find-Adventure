import React from 'react'
import { useEffect } from 'react'
import './Accommodation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Accommodation(props) {
  const setCategories = props.setCategories
  const categories = props.categories

  useEffect(() => {
    searchCategories()
  }, [categories])

  const handleTypeSelection = (e) => {
    if (e.target.checked) {
      setCategories((prevState) => {
        let categoryArr = [...prevState.accommodation, e.target.value]
        return { ...prevState, accommodation: categoryArr}
      })
    } else {
      setCategories((prevState) => {
        let index = prevState.accommodation.indexOf(e.target.value)
        let categoryArr = prevState.accommodation.slice()
        categoryArr.splice(index, 1)
        return { ...prevState, accommodation: categoryArr}
      })
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
    props.setCategoryURL(fixedCategory)
  }


  return (
    <div id='accommodation-div'>
      <FontAwesomeIcon icon='caret-down' />
      <button className='dropdown-button'>Accommodation</button>
      <br></br>
        <div id='accommodation-dropdown-menu'>
        <label>
          <input type='checkbox' name='accommodation' value='hotel' className='selection' onChange={handleTypeSelection}/>Hotel
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='accommodation' value='hut' className='selection' onChange={handleTypeSelection}/>Hut
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='accommodation' value='apartment' className='selection' onChange={handleTypeSelection}/>Apartment
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='accommodation' value='chalet' className='selection' onChange={handleTypeSelection}/>Chalet
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='accommodation' value='guest_house' className='selection' onChange={handleTypeSelection}/>Guest House
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='accommodation' value='hostel' className='selection' onChange={handleTypeSelection}/>Hostel
        </label>
        <br></br>
        <label>
          <input type='checkbox' name='accommodation' value='motel' className='selection' onChange={handleTypeSelection}/>Motel
        </label>
        </div>
    </div>
  )
}

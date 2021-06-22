import React from 'react'
import './Sidebar.css'

export default function Sidebar(props) {
  const handleClick = () => {
    props.setMenuIsActive(!props.menuIsActive)
  }

  return (
    <div className={props.menuIsActive ? 'sidebar-small' : 'sidebar-large'}>
      <form className={props.menuIsActive ? 'filter-list-hidden' : 'filter-list'}>
        <button className='dropdown-button'>Commercial</button>
        <div className={props.isActive ? 'arrow-right' : 'arrow-left'} id='dropdown-arrow'></div>
        <label for='commercial'>
          <input type='checkbox' name='commercial' value='commercial' className='selection' />Commercial
        </label>
        <input type='checkbox' name='accommodation' value='accommodation' className='selection'></input>
        <label for='accommodation'>accommodation</label>
        <input type='checkbox' name='activity' value='activity' className='selection'></input>
        <label for='activity'>activity</label>
        <input type='checkbox' name='catering' value='catering' className='selection'></input>
        <label for='catering'>catering</label>
      </form>
        <button type='button' className='menu' onClick={handleClick}>
        <div className={props.menuIsActive ? 'arrow-right' : 'arrow-left'}></div>
      </button>
    </div>
  )
}

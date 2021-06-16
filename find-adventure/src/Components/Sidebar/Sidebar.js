import React from 'react'
import './Sidebar.css'

export default function Sidebar(props) {
  const handleClick = () => {
    props.setIsActive(!props.isActive)
  }

  return (
    <div className={props.isActive ? 'sidebar-small' : 'sidebar-large'}>
      <div> hello </div>
    </div>
  )
}

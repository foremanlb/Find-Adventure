import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import {fas } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import Map from './Components/Map/Map'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [menuIsActive, setMenuIsActive] = useState(false)
  const [accommodationIsActive, setAccommodationIsActive] = useState(false)
  // const [activityIsActive, setActivityIsActive] = useState(false)
  // const [amenityIsActive, setAmenityIsActive] = useState(false)
  // const [airportIsActive, setAirportIsActive] = useState(false)
  // const [beachIsActive, setBeachIsActive] = useState(false)
  // const [buildingIsActive, setBuildingIsActive] = useState(false)
  // const [campingIsActive, setCampingIsActive] = useState(false)
  // const [cateringIsActive, setCateringIsActive] = useState(false)
  // const [childcareIsActive, setChildcareIsActive] = useState(false)
  // const [commercialIsActive, setCommercialIsActive] = useState(false)
  // const [educationIsActive, setEducationIsActive] = useState(false)
  // const [entertainmentIsActive, setEntertainmentIsActive] = useState(false)
  // const [healthcareIsActive, setHealthcareIsActive] = useState(false)
  // const [leisureIsActive, setLeisureIsActive] = useState(false)
  // const [naturalIsActive, setNaturalIsActive] = useState(false)
  // const [nationalParkIsActive, setNationalParkIsActive] = useState(false)
  // const [parkingIsActive, setParkingIsActive] = useState(false)
  // const [petIsActive, setPetIsActive] = useState(false)
  // const [publicTransportationIsActive, setPublicTransportationIsActive] = useState(false)
  // const [rentalIsActive, setRentalIsActive] = useState(false)
  // const [serviceIsActive, setServiceIsActive] = useState(false)
  // const [skiIsActive, setSkiIsActive] = useState(false)
  // const [sportIsActive, setSportIsActive] = useState(false)
  // const [tourismIsActive, setTourismIsActive] = useState(false)
  
  library.add(far, fas)

  return (
    <div id='main' >
      <Sidebar
        setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive}
        setAccommodationIsActive={setAccommodationIsActive} accommodationIsActive={accommodationIsActive}
        // setIsActive={setIsActive} isActive={isActive}
        // setIsActive={setIsActive} isActive={isActive}
        // setIsActive={setIsActive} isActive={isActive}
        // setIsActive={setIsActive} isActive={isActive}
        // setIsActive={setIsActive} isActive={isActive}
        // setIsActive={setIsActive} isActive={isActive}
        // setIsActive={setIsActive} isActive={isActive}
        // setIsActive={setIsActive} isActive={isActive}
        // setIsActive={setIsActive} isActive={isActive}
        // setIsActive={setIsActive} isActive={isActive}
        // setIsActive={setIsActive} isActive={isActive}
      
      />
      <Map />
    </div>
  );
}

export default App;

import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import {fas } from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react'
import Map from './Components/Map/Map'
import Sidebar from './Components/Sidebar/Sidebar'
import Results from './Components/Results/Results'

function App() {
  const [places, setPlaces] = useState([])
  const [resetMap, setResetMap] = useState(true)
  const [menuIsActive, setMenuIsActive] = useState(false)
  const [resultsIsActive, setResultsIsActive] = useState(false)
  const [accommodationIsActive, setAccommodationIsActive] = useState(false)
  const [lng, setLng] = useState(-123.1);
  const [lat, setLat] = useState(44.04);
  const [zoom, setZoom] = useState(11);
  const [finalURL, setFinalURL] = useState(``)
  const [activityIsActive, setActivityIsActive] = useState(false)
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

  useEffect(() => {
    setFinalURL(`&offset=0&filter=circle:${lng},${lat},8047&bias=proximity:${lng},${lat}`)
  }, [lat, lng])


  return (
    <div id='main' >
      <Sidebar
        lng={lng}
        lat={lat}
        finalURL={finalURL} setFinalURL={setFinalURL}
        setPlaces={setPlaces}
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
      <Results setResultsIsActive={setResultsIsActive} resultsIsActive={resultsIsActive}
        places={places}
        setLng={setLng} setLat={setLat} setZoom={setZoom}
        setResetMap={setResetMap} resetMap={resetMap}/>
      <Map lng={lng} setLng={setLng} lat={lat} setLat={setLat} zoom={zoom} setZoom={setZoom} places={places} resetMap={resetMap}/>
    </div>
  );
}

export default App;

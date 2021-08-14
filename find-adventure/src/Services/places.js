import axios from 'axios'
import {baseURL} from './apiConfig'

const finalURL = `${baseURL}&offset=1&filter=circle:-123.1404,44.1167,8047&categories=accommodation.hotel,accommodation.apartment,commercial`

export const getPlaces = async () => {
  const res = await axios.get(finalURL)
  return res.data
}
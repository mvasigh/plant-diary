import { GET_PLANT, GET_ALL_PLANTS } from './Types';
import { http as axios } from '../services/axios';

export function getPlant(plantId) {
  const request = axios.get(`/api/plants/${plantId}`);
  return {
    type: GET_PLANT,
    payload: request
  };
}

export function getAllPlants() {
  const request = axios.get('/api/plants/');
  return {
    type: GET_ALL_PLANTS,
    payload: request
  };
}

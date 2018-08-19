import {
  GET_PLANT,
  GET_ALL_PLANTS,
  WATER_PLANT,
  FERTILIZE_PLANT
} from './Types';
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

export function waterPlant(plantId) {
  const request = axios.get(`/api/plants/${plantId}/water`);
  return {
    type: WATER_PLANT,
    payload: request
  };
}

export function fertilizePlant(plantId) {
  const request = axios.get(`/api/plants/${plantId}/fertilize`);
  return {
    type: FERTILIZE_PLANT,
    payload: request
  };
}

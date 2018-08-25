import {
  GET_PLANT,
  GET_ALL_PLANTS,
  CREATE_PLANT,
  UPDATE_PLANT,
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

export function createPlant(plant) {
  const request = axios.post('/api/plants', { plant });
  return {
    type: CREATE_PLANT,
    payload: request
  };
}

export function updatePlant(plantId, plant) {
  const request = axios.put(`/api/plants/${plantId}`, { plant });
  return {
    type: UPDATE_PLANT,
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

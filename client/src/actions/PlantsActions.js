import { GET_PLANT, GET_ALL_PLANTS } from './Types';
import { http as axios } from '../../services/axios';

export function getPlant(plantId) {
  const request = axios.get(`/api/plants/${plantId}`);
  return {
    type: GET_PLANT,
    payload: request
  };
}

// getAllPlants function here

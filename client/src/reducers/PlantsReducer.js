import {
  GET_PLANT,
  GET_ALL_PLANTS,
  WATER_PLANT,
  FERTILIZE_PLANT,
  CREATE_PLANT,
  UPDATE_PLANT
} from '../actions/Types';

export default function plantsReducer(state = {}, action) {
  switch (action.type) {
    case GET_ALL_PLANTS:
      return action.payload.data.response.reduce((acc, plant) => {
        acc[plant._id] = plant;
        return acc;
      }, {});
    case GET_PLANT:
      return {
        ...state,
        [action.payload.data.response._id]: action.payload.data.response
      };
    case CREATE_PLANT:
      return {
        ...state,
        [action.payload.data.response._id]: action.payload.data.response
      };
    case UPDATE_PLANT:
      return {
        ...state,
        [action.payload.data.response._id]: action.payload.data.response
      };
    case WATER_PLANT:
      return {
        ...state,
        [action.payload.data.response._id]: action.payload.data.response
      };
    case FERTILIZE_PLANT:
      return {
        ...state,
        [action.payload.data.response._id]: action.payload.data.response
      };
    default:
      return state;
  }
}

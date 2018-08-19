import {
  GET_PLANT,
  GET_ALL_PLANTS,
  WATER_PLANT,
  FERTILIZE_PLANT
} from '../actions/Types';

export default function plantsReducer(state = {}, action) {
  let plant;
  switch (action.type) {
    case GET_ALL_PLANTS:
      return action.payload.data.response.reduce((acc, plant) => {
        acc[plant._id] = plant;
        return acc;
      }, {});
    case GET_PLANT:
      plant = action.payload.data.response;
      return { [plant._id]: plant, ...state };
    case WATER_PLANT:
      plant = action.payload.data.response;
      return { [plant._id]: plant, ...state };
    case FERTILIZE_PLANT:
      plant = action.payload.data.response;
      return { [plant._id]: plant, ...state };
    default:
      return state;
  }
}

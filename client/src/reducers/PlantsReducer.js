import { GET_PLANT, GET_ALL_PLANTS } from '../actions/Types';

export default function plantsReducer(state = {}, action) {
  switch (action.type) {
    case GET_ALL_PLANTS:
      return action.payload.data.response.reduce((acc, plant) => {
        acc[plant._id] = plant;
        return acc;
      }, {});
    case GET_PLANT:
      const plant = action.payload.data.response;
      return { [plant._id]: plant };
    default:
      return state;
  }
}

import { combineReducers } from 'redux';
import plantsReducer from './PlantsReducer';

const rootReducer = combineReducers({
  plants: plantsReducer
});

export default rootReducer;

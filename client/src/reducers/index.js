import { combineReducers } from 'redux';
import toasterReducer from './ToasterReducer';
import plantsReducer from './PlantsReducer';

const rootReducer = combineReducers({
  toaster: toasterReducer,
  plants: plantsReducer
});

export default rootReducer;

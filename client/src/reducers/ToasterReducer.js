import { SHOW_TOAST, HIDE_TOAST } from '../actions/Types';

export default function toasterReducer(state = { open: false }, action) {
  switch (action.type) {
    case SHOW_TOAST:
      return action.payload;
    case HIDE_TOAST:
      return { ...state, open: action.payload.open };
    default:
      return state;
  }
}

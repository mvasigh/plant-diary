import { SHOW_TOAST, HIDE_TOAST } from './Types';

export function showToast(message = '', duration = 4000) {
  return {
    type: SHOW_TOAST,
    payload: {
      open: true,
      message,
      duration
    }
  };
}

export function hideToast() {
  return {
    type: HIDE_TOAST,
    payload: {
      open: false
    }
  };
}

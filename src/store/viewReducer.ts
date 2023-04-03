// viewReducer.ts
import { CHANGE_VIEW, RESET_VIEW } from './actions/actionTypes';

const initialState = {
  currentView: ' Look at cardReducer.ts for an example of how to use this reducer.',
};

export const viewReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return { ...state, currentView: action.payload };
    case RESET_VIEW:
      return { ...state, currentView: '' };
    default:
      return state;
  }
};

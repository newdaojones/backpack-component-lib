// rootReducer.ts
import { combineReducers } from 'redux';
import cardReducer from './cardReducer'; // Import the cardReducer from the reducer.ts file.
import viewReducer from './viewReducer'; // Import the viewReducer from the viewReducer.ts file.

const rootReducer = combineReducers({
  card: cardReducer,
  view: viewReducer,
  // ... (add other reducers as needed)
});

export default rootReducer;

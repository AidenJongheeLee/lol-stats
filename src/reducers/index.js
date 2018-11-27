import { combineReducers } from 'redux';
import matchReducer from './matchReducer';

const rootReducer = combineReducers({
  matches: matchReducer,
});

export default rootReducer;

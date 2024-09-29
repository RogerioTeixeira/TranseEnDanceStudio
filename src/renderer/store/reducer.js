import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import showsReducer from './showsReducer';
import textsReducer from './textsReducer';
import subtitlesReducer from './subtitlesReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  shows: showsReducer,
  texts: textsReducer,
  subtitles: subtitlesReducer,
});

export default reducer;

// reducers/textsReducer.js
import {
  ADD_TEXT,
  UPDATE_TEXT,
  DELETE_TEXT,
  ADD_SUBTITLE,
  DELETE_SUBTITLE,
  SET_CURRENT_TEXT,
} from './actions';

const initialState = {
  byId: {
    1: {
      id: 1,
      title: 'Text sample',
      subtitles: [1001],
    },
  },
  allIds: [1],
  currentText: null,
};

const textsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.newText.id]: action.newText,
        },
        allIds: [...state.allIds, action.newText.id],
      };

    case UPDATE_TEXT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.updatedText.id]: action.updatedText,
        },
      };
    case SET_CURRENT_TEXT:
      return {
        ...state,
        currentText: action.id,
      };

    case DELETE_TEXT:
      const { [action.textId]: _, ...remainingTexts } = state.byId;
      return {
        ...state,
        byId: remainingTexts,
        allIds: state.allIds.filter((id) => id !== action.textId),
      };

    case ADD_SUBTITLE:
      console.log("reducerText==>",state)
      console.log("reducerText==>",action.textId)
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.textId]: {
            ...state.byId[action.textId],
            subtitles: [
              ...state.byId[action.textId].subtitles,
              action.newSubtitle.id,
            ],
          },
        },
      };

    case DELETE_SUBTITLE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.textId]: {
            ...state.byId[action.textId],
            subtitles: state.byId[action.textId].subtitles.filter(
              (id) => id !== action.subtitleId,
            ),
          },
        },
      };

    default:
      return state;
  }
};

export default textsReducer;

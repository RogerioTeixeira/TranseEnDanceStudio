// reducers/showsReducer.js
import {
  ADD_SHOW,
  UPDATE_SHOW,
  DELETE_SHOW,
  ADD_TEXT,
  DELETE_TEXT,
} from './actions';

const initialState = {
  byId: {
    1: {
      id: 1,
      name:"First show",
      texts: [1]
    },
  },
  allIds: [1],
  currentId : 1
};

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOW:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.newShow.id]: action.newShow,
        },
        allIds: [...state.allIds, action.newShow.id],
      };

    case UPDATE_SHOW:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.updatedShow.id]: action.updatedShow,
        },
      };

    case DELETE_SHOW:
      const { [action.showId]: _, ...remainingShows } = state.byId;
      return {
        ...state,
        byId: remainingShows,
        allIds: state.allIds.filter((id) => id !== action.showId),
      };

    case ADD_TEXT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.showId]: {
            ...state.byId[action.showId],
            texts: [...state.byId[action.showId].texts, action.newText.id],
          },
        },
      };

    case DELETE_TEXT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.showId]: {
            ...state.byId[action.showId],
            texts: state.byId[action.showId].texts.filter(
              (id) => id !== action.textId,
            ),
          },
        },
      };

    default:
      return state;
  }
};

export default showsReducer;

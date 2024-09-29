// reducers/subtitlesReducer.js
import { ADD_SUBTITLE, UPDATE_SUBTITLE, DELETE_SUBTITLE } from './actions';

const initialState = {
  selectedId: 1,
  byId: {
    1001: {
      id: 1001,
      english: 'Subtitle 1 in English',
      french: 'Sous-titre 1 en Français',
      arabic: '',
    },
  },
  allIds: [1001],
};

const subtitlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBTITLE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.newSubtitle.id]: action.newSubtitle,
        },
        allIds: [...state.allIds, action.newSubtitle.id],
      };

    case UPDATE_SUBTITLE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.updatedSubtitle.id]: action.updatedSubtitle,
        },
      };

    case DELETE_SUBTITLE:
      const { [action.subtitleId]: _, ...remainingSubtitles } = state.byId;
      return {
        ...state,
        byId: remainingSubtitles,
        allIds: state.allIds.filter((id) => id !== action.subtitleId),
      };

    default:
      return state;
  }
};

export default subtitlesReducer;

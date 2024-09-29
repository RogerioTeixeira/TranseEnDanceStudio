import * as actionTypes from './actions';
import config from '../config';

export const initialState = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  appTheme: 'light',
  opened: true,
  theatreShows:{
    name:'',
    scritps:{}
  },
  sceneScripts: {}, // Container for all scripts and their subtitles
};

const customizationReducer = (state = initialState, action) => {
  console.log('Reducer action:', action);
  console.log('Reducer state:', state);
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      return {
        ...state,
        isOpen: [action.id],
      };

    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened,
      };

    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily,
      };

    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius,
      };

    case actionTypes.SET_APP_THEME:
      return {
        ...state,
        appTheme: action.appTheme,
      };

    // New actions for managing scripts and subtitles
    case actionTypes.SET_SCRIPT:
      const { scriptId, scriptData } = action.payload;
      return {
        ...state,
        sceneScripts: {
          ...state.sceneScripts,
          [scriptId]: {
            ...state.sceneScripts[scriptId],
            ...scriptData, // Add or update the script's data
          },
        },
      };

    case actionTypes.UPDATE_SUBTITLES: {
      const { scriptId, subtitle } = action.payload;
      return {
        ...state,
        sceneScripts: {
          ...state.sceneScripts,
          [scriptId]: {
            ...state.sceneScripts[scriptId],
            subtitles: state.sceneScripts[scriptId].subtitles.map(row=> row.id === subtitle.id ? {...subtitle} : row)
          },
        },
      };
    }
    case actionTypes.DELETE_SUBTITLES: {
      const { scriptId, rowId } = action.payload;
      return {
        ...state,
        sceneScripts: {
          ...state.sceneScripts,
          [scriptId]: {
            ...state.sceneScripts[scriptId],
            subtitles: state.sceneScripts[scriptId].subtitles.filter(row=> row.id !== rowId)
          },
        },
      };
    }
    case actionTypes.UPDATE_ROW_MODE: {
      const { modModels, scriptId , rowId } = action.payload;
      console.log("actionTypes.UPDATE_ROW_MODE:", action)
      console.log("actionTypes.UPDATE_ROW_MODE state:", state)
      
    //  const index = state.state.sceneScripts[scriptId].subtitles.findIndex(row => row.id === rowId)
      return {
        ...state,
        sceneScripts: {
          ...state.sceneScripts,
          [scriptId]: {
            ...state.sceneScripts[scriptId],
            modModels:{...state.sceneScripts[scriptId].modModels , [rowId]: {...modModels}},
          },
        },
      };
    }
    case actionTypes.ADD_SUBTITLES:
      const { subtitles, modModels } = action.payload;
      return {
        ...state,
        sceneScripts: {
          ...state.sceneScripts,
          [action.payload.scriptId]: {
            ...state.sceneScripts[action.payload.scriptId],
            subtitles: [
              ...(state.sceneScripts[action.payload.scriptId]?.subtitles || []),
              subtitles,
            ],
            modModels: {
              ...state.sceneScripts[action.payload.scriptId]?.modModels,
              ...modModels,
            },
          },
        },
      };
    case actionTypes.MODAL_OPEN: {
      const id = action.payload.modalFileName;
      const meta = action.payload.meta;
      return {
        ...state,
        modal: {
          ...state.modal,
          [id]: { id, meta, open: true },
        },
      };
    }
    case actionTypes.MODAL_CLOSE: {
      const id = action.payload.modalFileName;
      return {
        ...state,
        modal: {
          ...state.modal,
          [id]: { id, open: false },
        },
      };
    }

    default:
      return state;
  }
};

export default customizationReducer;

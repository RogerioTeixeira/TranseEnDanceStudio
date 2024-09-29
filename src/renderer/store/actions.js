// Action types
export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';
export const SET_APP_THEME = '@customization/SET_APP_THEME';
export const MODAL_OPEN = '@modals/MODAL_OPEN';
export const MODAL_CLOSE = '@modals/MODAL_CLOSE';

// Script-related actions
export const SET_SCRIPT = '@application/SET_SCRIPT'; // Singolare per gestire un singolo script
export const UPDATE_SUBTITLES = '@application/UPDATE_SUBTITLES'; // Azione per i sottotitoli
export const ADD_SUBTITLES = '@application/ADD_SUBTITLES';
export const DELETE_SUBTITLES = '@application/DELETE_SUBTITLES';
export const UPDATE_ROW_MODE = '@application/UPDATE_ROW_MODE'; // Azione per i sottotitoli





export const ADD_SHOW = 'ADD_SHOW';
export const UPDATE_SHOW = 'UPDATE_SHOW';
export const DELETE_SHOW = 'DELETE_SHOW';

export const ADD_TEXT = 'ADD_TEXT';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const DELETE_TEXT = 'DELETE_TEXT';
export const SET_CURRENT_TEXT = 'SET_CURRENT_TEXT';

export const ADD_SUBTITLE = 'ADD_SUBTITLE';
export const UPDATE_SUBTITLE = 'UPDATE_SUBTITLE';
export const DELETE_SUBTITLE = 'DELETE_SUBTITLE';






export const updateRowMode = (newShow) => ({
  type: ADD_SHOW,
  newShow,
});

// Shows Actions
export const addShow = (newShow) => ({
  type: ADD_SHOW,
  newShow,
});

export const updateShow = (updatedShow) => ({
  type: UPDATE_SHOW,
  updatedShow,
});

export const deleteShow = (showId) => ({
  type: DELETE_SHOW,
  showId,
});

// Texts Actions
export const addText = (showId, newText) => ({
  type: ADD_TEXT,
  showId,
  newText,
});

export const updateText = (updatedText) => ({
  type: UPDATE_TEXT,
  updatedText,
});

export const setCurrentText = (id) => ({
  type: SET_CURRENT_TEXT,
  id,
});

export const deleteText = (showId, textId) => ({
  type: DELETE_TEXT,
  showId,
  textId,
});

// Subtitles Actions
export const addSubtitle = (textId, newSubtitle) => ({
  type: ADD_SUBTITLE,
  textId,
  newSubtitle,
});

export const updateSubtitle = (updatedSubtitle) => ({
  type: UPDATE_SUBTITLE,
  updatedSubtitle,
});

export const deleteSubtitle = (textId, subtitleId) => ({
  type: DELETE_SUBTITLE,
  textId,
  subtitleId,
});

export function openModal(modalFileName,meta) {
  return {
    type: MODAL_OPEN,
    payload: {
      modalFileName,
      meta
    }
  };
}

export function closeModal(modalFileName) {
  return {
    type: MODAL_CLOSE,
    payload: { modalFileName }
  };
}
 
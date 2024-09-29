// selectors.js

// Shows Selectors
export const getShowById = (state, showId) => state.shows.byId[showId];
export const getAllShows = (state) => state.shows.allIds.map(id => state.shows.byId[id]);

// Texts Selectors
export const getTextById = (state, textId) => state.texts.byId[textId];
export const getCurrenntText = (state) => state.texts.currentText ? state.texts.byId[state.texts.currentText]: null;
export const getTextsForShow = (state, showId) => {
  console.log("tateeeee", state)
  const show = state.shows.byId[showId];
  return show ? show.texts.map(textId => state.texts.byId[textId]) : [];
};

// Subtitles Selectors
export const getSubtitleById = (state, subtitleId) => state.subtitles.byId[subtitleId];
export const getSubtitlesForText = (state, textId) => {
  const text = state.texts.byId[textId];
  return text ? text.subtitles.map(subtitleId => state.subtitles.byId[subtitleId]) : [];
};



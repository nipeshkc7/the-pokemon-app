import { createSelector } from "reselect";

const getAppState = (state) => state.AppStatus;

export const getCurrentAppState = createSelector(
  [getAppState],
  (appState) => appState
);

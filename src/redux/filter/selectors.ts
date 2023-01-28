import { RootState } from "../store";

export const selectSort = (state: RootState) => state.filterReducer.sort;
export const selectFilter = (state: RootState) => state.filterReducer;
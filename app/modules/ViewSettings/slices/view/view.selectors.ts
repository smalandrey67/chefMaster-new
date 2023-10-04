import type { RootState } from "@/store/store";

export const selectViewMain = (state: RootState) => state.viewSettings.view.main;
export const selectViewNavbar = (state: RootState) => state.viewSettings.view.navbar;
export const selectIsViewHasBeenChanged = (state: RootState) => state.viewSettings.isViewHasBeenChanged;
export const selectInitialView = (state: RootState) => state.viewSettings.initialView; 
import type { RootState } from "@/store/store";

export const selectViewMain = (state: RootState) => state.viewSettings.view.main;
export const selectViewNavbar = (state: RootState) => state.viewSettings.view.navbar;

import type { RootState } from "@/store/store";

export const selectViewMain = (state: RootState) => state.view.viewSettings.main;
export const selectViewNavbar = (state: RootState) => state.view.viewSettings.navbar;

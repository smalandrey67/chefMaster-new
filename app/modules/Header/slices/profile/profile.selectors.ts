import type { RootState } from "@/store/store";

export const selectIsProfileCardOpen = (state: RootState) => state.profile.isProfileCardOpen;

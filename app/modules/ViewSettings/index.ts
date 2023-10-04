import { ViewSettings } from "./ViewSettings";
import { viewSettingsThunk } from "./slices/view/view.thunk";
import { viewActions, viewReducer } from "./slices/view/view";
import { selectViewMain, selectViewNavbar } from "./slices/view/view.selectors";

export { ViewSettings, viewReducer, selectViewMain, selectViewNavbar, viewSettingsThunk, viewActions };

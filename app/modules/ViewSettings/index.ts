import { ViewSettings } from "./ViewSettings";
import { viewActions, viewReducer } from "./slices/view/view";
import { selectViewMain, selectViewNavbar } from "./slices/view/view.selectors";
import { viewSettingsThunk } from "./slices/view/view.thunk";

export { ViewSettings, viewReducer, selectViewMain, selectViewNavbar, viewSettingsThunk, viewActions };

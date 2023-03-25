// routes
// import { PATH_DASHBOARD } from './routes/paths';

// API
// ----------------------------------------------------------------------

export const HOST_API_KEY = process.env.REACT_APP_HOST_API_KEY || "";
export const HOST_API_KEY_CAMBRIDGE = process.env.REACT_APP_CAMBRIDGE_HOST_API_KEY || "";

export const MAP_API = process.env.REACT_APP_MAPBOX_API;

// ROOT PATH AFTER LOGIN SUCCESSFUL
// export const PATH_AFTER_LOGIN = PATH_DASHBOARD.overview.root; // as '/dashboard/app'

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 88,
  H_DASHBOARD_DESKTOP: 92,
  H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
};

export const NAV = {
  W_BASE: 260,
  W_DASHBOARD: 280,
  W_DASHBOARD_MINI: 88,
  //
  H_DASHBOARD_ITEM: 48,
  H_DASHBOARD_ITEM_SUB: 36,
  //
  H_DASHBOARD_ITEM_HORIZONTAL: 32,

  ACTIVE_COLOR: "#177CC4",
  COLOR: "#919EAB",
};

export const ICON = {
  NAV_ITEM: 24,
  NAV_ITEM_HORIZONTAL: 22,
  NAV_ITEM_MINI: 22,
};

export const TITLE_DEFAULT = "Orbit";

// DATE-TIME FORMAT
// ----------------------------------------------------------------------
export const DATE_FORMAT = "dd/MM/yyyy";
export const DATE_FORMAT_API = "yyyy-MM-dd";

// TABLE
// ----------------------------------------------------------------------

export const TABLE_FILTER_MAX_OPTIONS = 3;
export const TABLE_ROW_HEIGHT = 53;
export const MIN_PAGE = 1;
export const DEFAULT_ROWS_PER_PAGE_OPTS = [5, 10, 25];
export const DEFAULT_ROW_PER_PAGE = DEFAULT_ROWS_PER_PAGE_OPTS[0];

// ROLE
// ----------------------------------------------------------------------

export const ROLES = {
  ADMIN: "Admin",
  LECTURER: "Giangvien",
  STUDENT: "Hocvien",
  HOST: "Khaothi",
  CANDIDATE: "ThiSinh",
};

export const FUNCTION_ROLE = {
  OVERVIEW: [ROLES.ADMIN, ROLES.HOST, ROLES.LECTURER],
  LECTURER: [ROLES.ADMIN, ROLES.HOST],
  CANDIDATE: [ROLES.ADMIN, ROLES.LECTURER],
  PROFILE_COLLECTION: [ROLES.ADMIN],
  EXAM: [ROLES.ADMIN, ROLES.HOST, ROLES.LECTURER],
  RESULTS: [ROLES.ADMIN, ROLES.LECTURER, ROLES.HOST],
  EXAM_ROOM: [ROLES.ADMIN, ROLES.HOST],
  CANDIDATE_PAPER: [ROLES.ADMIN],
  CERTIFICATE: [ROLES.ADMIN],
};

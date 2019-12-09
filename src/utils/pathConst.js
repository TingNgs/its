export const LOGIN = "/login";
export const REGISTER = "/register";
export const DASHBOARD = "/dashboard";
export const PROJECT = "/project";
export const ISSUE = "/issue";
export const SETTING = "/setting";
export const PROFILE = "/:user";
export const PROJECT_DETIAL = "/p/:user/:project";
export const PROJECT_DETIAL_LINK = (user, project) => `/p/${user}/${project}`;

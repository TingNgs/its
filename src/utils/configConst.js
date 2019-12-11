export const apihost = {
  local: "http://127.0.0.1:8080",
  dev: "https://its-api.herokuapp.com",
  prod: "https://its-api.herokuapp.com"
};

export const FETCH_PROJECT_LIMIT = 15;

export const red_alert = {
  LOGIN_EMAIL_NOT_EXIST:
    "We don't recognize this email, please sign up to get started",
  LOGIN_FAIL: "Login fail. Please try again",
  REGISTER_FAIL: "Register fail. Please try again",

  REGISTER_EMAIL_EXIST: "This email address is already in use",
  REGISTER_USERNAME_EXIST: "This username is already in use",

  TRY_AGAIN_LATHER: "Something when wrong. Please try again later.",
  PROJECT_NAME_REPEATED: "Project name repeated.",

  NOT_FOUND: "404 NOT FOUND"
};

export const STATE_OPTION = ["s1", "s2", "s3", "s4", "s5"];
export const SEVERITY_OPTION = ["se1", "se2", "se3", "se4", "se5"];
export const PRIORITY_OPTION = ["p1", "p2", "p3", "p4", "p5"];

export const inputType = {
  text_alert: "text_alert",
  text: "text",
  textarea: "textarea",
  radio: "radio",
  select: "select"
};

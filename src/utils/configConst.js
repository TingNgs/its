export const apihost = {
  local: "http://127.0.0.1:8080",
  dev: "https://its-api.herokuapp.com",
  prod: "https://its-api.herokuapp.com"
};

export const red_alert = {
  LOGIN_EMAIL_NOT_EXIST:
    "We don't recognize this email, please sign up to get started",
  LOGIN_FAIL: "Login fail. Please try again",
  REGISTER_FAIL: "Register fail. Please try again",

  REGISTER_EMAIL_EXIST: "This email address is already in use",
  REGISTER_USERNAME_EXIST: "This username is already in use",

  TRY_AGAIN_LATHER: "Something when wrong. Please try again later.",
  PROJECT_NAME_REPEATED: "Project name repeated."
};

export const inputType = {
  text_alert: "text_alert",
  text: "text",
  textarea: "textarea",
  radio: "radio"
};

import React from "react";

const AuthInput = props => {
  return (
    <div>
      <input
        className="auth_input w-full border-b-2"
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
      <div className="input_alert text-16">{props.alertMessage}</div>
    </div>
  );
};

export default AuthInput;

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
        onBlur={props.onblur}
      />
      <div className="auth_input_alert text-14 text-red-600">
        {props.alertMessage}
      </div>
    </div>
  );
};

export default AuthInput;

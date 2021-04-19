import React from "react";

function Button(props) {
  return (
    <div OnClick={props.Onclick} className="button button--{props.shape}">
      {props.value}
    </div>
  );
}

export default Button;

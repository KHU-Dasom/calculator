import React from "react";

function Button(props) {
  return (
    <div onClick={props.Onclick} className={"button " + props.shape}>
      {props.value}
    </div>
  );
}

export default Button;

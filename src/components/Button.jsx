import React from "react";

function Button(props) {
  return (
    <div>
      <button className="button" onClick={props.clicked}>Give it to me!</button>
    </div>
  );
}
  
export default Button;
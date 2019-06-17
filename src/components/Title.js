import React from "react";

const Title = props => (
  <div
    onClick={
      props.clickEvent !== undefined
        ? props.clickEvent.bind(this, props.title)
        : null
    }
  >
    <div>{props.title}</div>
  </div>
);
export default Title;

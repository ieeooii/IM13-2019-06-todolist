import React from "react";

const Bar = props => (
  <div>
    <div id="title">{props.titleT}</div>
    {console.log(props.titleT)}
    <span>
      <input
        type="text"
        placeholder="list.."
        id="listBar"
        onKeyUp={props.enter}
      />
      {console.log()}
    </span>
    <span>
      <input
        type="text"
        placeholder="memo.."
        id="memoBar"
        onKeyUp={props.enter}
      />
    </span>
  </div>
);
export default Bar;

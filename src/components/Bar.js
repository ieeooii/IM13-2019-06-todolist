import React from "react";

const Bar = props => (
  <div>
    <div id="title">To Do List</div>
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

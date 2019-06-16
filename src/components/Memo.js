import React from "react";
import MemoComment from "./MemoComment";

const Memo = props => (
  <div id="memoContainer">
    <div>memo</div>
    {props.memoText.map((el, indx) => (
      <MemoComment memoText={el} key={indx} />
    ))}
  </div>
);
export default Memo;

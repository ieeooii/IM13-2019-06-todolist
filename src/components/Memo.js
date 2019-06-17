import React from "react";
import MemoComment from "./MemoComment";

const Memo = props => {
  if (props.titleT === "") {
    return (
      <div id="memoContainer">
        <div>Memo</div>
        <MemoComment memoText={""} />
      </div>
    );
  }
  let local = window.localStorage[props.titleT];
  let obj = JSON.parse(local)["memo"];
  return (
    <div id="memoContainer">
      <div>Memo</div>
      {obj.map((el, indx) => (
        <MemoComment memoText={el} key={indx} />
      ))}
    </div>
  );
};
export default Memo;

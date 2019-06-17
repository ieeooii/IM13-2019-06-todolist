import React from "react";
import ListComment from "./ListComment";

const Todolist = props => {
  if (props.titleT === "") {
    return (
      <div id="listContainer">
        <div>To Do List</div>
        <ListComment listText={""} />
      </div>
    );
  }
  let local = window.localStorage[props.titleT];
  let obj = JSON.parse(local)["list"];
  return (
    <div id="listContainer">
      <div>To Do List</div>
      {obj.map((el, indx) => (
        <ListComment listText={el} key={indx} />
      ))}
    </div>
  );
};
export default Todolist;

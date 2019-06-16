import React from "react";
import ListComment from "./ListComment";

const Todolist = props => (
  <div id="listContainer">
    <div>To Do List</div>
    {props.listText.map((el, indx) => (
      <ListComment listText={el} key={indx} />
    ))}
  </div>
);
export default Todolist;

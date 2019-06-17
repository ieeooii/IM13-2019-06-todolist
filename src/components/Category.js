import React from "react";
import Title from "./Title";

const Category = props => (
  //   console.log("category");
  <div className="category">
    <button id="addBtn" onClick={props.write}>
      +
    </button>
    Add List
    <div className="listTitle">
      {props.title.map((el, indx) => (
        <Title title={el} key={indx} clickEvent={props.clickEvent} />
      ))}
      {console.log(props.title)}
    </div>
  </div>
);
export default Category;

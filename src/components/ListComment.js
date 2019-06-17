import React from "react";

const ListComment = props => {
  if (props.listText === "") {
    return (
      <div className="listComment">
        <div>{props.listText}</div>
      </div>
    );
  }
  return (
    <div className="listComment">
      <div>
        <input type="checkbox" className="checkBox" />
        {props.listText}
      </div>
    </div>
  );
};
export default ListComment;

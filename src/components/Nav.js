import React from "react";
import Bar from "./Bar";

const Nav = props => (
  <div>
    <Bar enter={props.enter} listText={props.listText} />
  </div>
);

export default Nav;

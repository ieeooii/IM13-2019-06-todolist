import React from "react";
import Bar from "./Bar";

const Nav = props => (
  <div>
    <Bar enter={props.enter} titleT={props.titleT} />
  </div>
);

export default Nav;

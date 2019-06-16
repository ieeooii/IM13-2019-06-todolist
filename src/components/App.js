import React from "react";
import Category from "./Category";
import Nav from "./Nav";
import Todolist from "./Todolist";
import Memo from "./Memo";

class App extends React.Component {
  render() {
    return (
      <div id="aollBox">
        <div id="container">
          <Category />
        </div>
        <div id="barContainer">
          <Nav />
        </div>
        <div>
          <Memo />
          <Todolist />
        </div>
      </div>
    );
  }
}
export default App;

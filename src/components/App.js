import React from "react";
import Category from "./Category";
import Nav from "./Nav";
import Todolist from "./Todolist";
import Memo from "./Memo";

class App extends React.Component {
  // window.localStorage.removeItem("items"); -> items 삭제
  // window.localStorage.setItem("items", JSON.stringify({title: "06", lists: []})); -> 추가
  constructor() {
    super();
    this.state = {
      title: [],
      list: [],
      memo: [],
      local: window.localStorage
    };
  }

  handlePrompt() {
    let a = prompt("Write a Title");
    this.setState({
      title: this.state.title.concat(a)
    });
  }

  handleKeyUp(event) {
    let { value, id } = event.target;
    if (event.keyCode === 13 && value !== "") {
      if (id === "listBar") {
        this.setState({
          list: this.state.list.concat(value)
        });
      } else if (id === "memoBar") {
        this.setState({
          memo: this.state.memo.concat(value)
        });
      }
      event.target.value = "";
    }
  }

  render() {
    console.log("list: " + this.state.list, "     memo: " + this.state.memo);
    return (
      <div id="aollBox">
        <div id="container">
          <Category
            write={this.handlePrompt.bind(this)}
            title={this.state.title}
          />
        </div>
        <div id="barContainer">
          <Nav enter={this.handleKeyUp.bind(this)} listText={this.state.list} />
        </div>
        <div>
          <Memo memoText={this.state.memo} />
          <Todolist listText={this.state.list} />
        </div>
      </div>
    );
  }
}
export default App;

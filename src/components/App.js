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
      titleEl: "",
      list: [],
      memo: [],
      local: window.localStorage
    };
  }

  handleKeyUp(event) {
    const { value, id } = event.target;
    if (event.keyCode === 13 && value !== "") {
      let titleKey = window.localStorage[this.state.titleEl];
      let obj = JSON.parse(titleKey);
      if (id === "listBar" && this.state.titleEl.length > 0) {
        obj["list"].push(value);
        this.setState({
          list: this.state.list.concat(value),
          local: window.localStorage.setItem(
            this.state.titleEl,
            JSON.stringify(obj)
          )
        });
      } else if (id === "memoBar" && this.state.titleEl.length > 0) {
        obj["memo"].push(value);
        this.setState({
          memo: this.state.memo.concat(value),
          local: window.localStorage.setItem(
            this.state.titleEl,
            JSON.stringify(obj)
          )
        });
      }
      event.target.value = "";
    }
  }

  handlePrompt() {
    let a = prompt("Write a Title");
    this.setState({
      title: a,
      local: window.localStorage.setItem(
        a,
        JSON.stringify({ list: [], memo: [] })
      )
    });
  }

  pushLocal(title) {
    this.setState({
      titleEl: title
    });
  }

  render() {
    let d = window.localStorage[this.state.titleEl];
    if (this.state.titleEl.length > 0) {
      let i = JSON.parse(d);
      console.log(i);
    }
    console.log(window.localStorage);
    // console.log(this.state.titleEl);
    // console.log("list: " + this.state.list, "     memo: " + this.state.memo);
    return (
      <div id="aollBox">
        <div id="container">
          <Category
            write={this.handlePrompt.bind(this)}
            title={Object.keys(window.localStorage)}
            clickEvent={this.pushLocal.bind(this)}
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

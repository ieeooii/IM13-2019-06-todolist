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

  handlePrompt() {
    let a = prompt("Write a Title");
    window.localStorage.setItem(a, JSON.stringify({ list: [], memo: [] }));
    this.setState({
      title: a
    });
    // let a = prompt("Write a Title");
    // let arr = JSON.parse(window.localStorage["name"]);
    // window.localStorage.setItem(a, JSON.stringify({ list: [], memo: [] }));
    // if (this.state.title.length === 0) {
    //   window.localStorage.setItem("name", JSON.stringify([a]));
    // } else if (this.state.title.length > 0) {
    //   console.log(arr);
    //   arr.push(a);
    //   window.localStorage.setItem("name", JSON.stringify(arr));
    // }
    // this.setState({
    //   title: arr
    // });
  }

  handleKeyUp(event) {
    const { value, id } = event.target;
    if (event.keyCode === 13 && value !== "") {
      let titleKey = this.state.local[this.state.titleEl];
      let obj = JSON.parse(titleKey);
      if (id === "listBar" && this.state.titleEl.length > 0) {
        obj["list"].push(value);
        window.localStorage.setItem(this.state.titleEl, JSON.stringify(obj));
        this.setState({
          list: this.state.list.concat(value)
        });
      } else if (id === "memoBar" && this.state.titleEl.length > 0) {
        obj["memo"].push(value);
        window.localStorage.setItem(this.state.titleEl, JSON.stringify(obj));
        this.setState({
          memo: this.state.memo.concat(value)
        });
      }
      event.target.value = "";
    }
  }

  pushLocal(title) {
    this.setState({
      titleEl: title
    });
  }

  render() {
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
          <Nav
            enter={this.handleKeyUp.bind(this)}
            titleT={
              this.state.titleEl.length > 0 ? this.state.titleEl : "To Do List"
            }
          />
        </div>
        <div>
          <Memo titleT={this.state.titleEl} />
          <Todolist titleT={this.state.titleEl} />
        </div>
      </div>
    );
  }
}
export default App;

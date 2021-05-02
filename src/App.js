import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

let defaultStyle = {
  color: "purple",
};

class Aggregate extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2 style={{ defaultStyle }}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={{ defaultStyle }}>
        <img />
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display: "inline-block", width: "25%" }}>
        <img />
        <h3>Playlist name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1 style={{ ...defaultStyle, "font-size": "54px" }}>Title</h1>
      <Aggregate />
      <Aggregate />
      <Filter />
      <Playlist />
      <Playlist />
      <Playlist />
    </div>
  );
}

export default App;

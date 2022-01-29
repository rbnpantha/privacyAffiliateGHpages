import React, { Component } from "react";
import ListQnA from "./ListQnA";

class QnAReact extends Component {
  render() {
    console.log("render");

    return (
      <div>
        <div className="container">
          <h1>React Interview Questions</h1>
          <ListQnA />
        </div>
      </div>
    );
  }
}

export default QnAReact;

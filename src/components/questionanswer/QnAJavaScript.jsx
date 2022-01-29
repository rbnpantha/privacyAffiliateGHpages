import React, { Component } from "react";
import ListQnA from "./ListQnA";

class QnAJavaScript extends Component {
  render() {
    console.log("render");

    return (
      <div>
        <div className="container">
          <h1>Java Interview Questions</h1>
          <ListQnA />
        </div>
      </div>
    );
  }
}

export default QnAJavaScript;

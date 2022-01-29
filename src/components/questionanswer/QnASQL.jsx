import React, { Component } from "react";
import ListQnA from "./ListQnA";

class QnASQL extends Component {
  render() {
    console.log("render");

    return (
      <div>
        <div className="container">
          <h1>SQL Interview Questions</h1>
          <ListQnA />
        </div>
      </div>
    );
  }
}

export default QnASQL;

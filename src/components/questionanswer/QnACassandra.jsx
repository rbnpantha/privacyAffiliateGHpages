import React, { Component } from "react";
import ListQnA from "./ListQnA";

class QnACassandra extends Component {
  render() {
    console.log("render");

    return (
      <div>
        <div className="container">
          <h1>Cassandra Interview Questions</h1>
          <ListQnA />
        </div>
      </div>
    );
  }
}

export default QnACassandra;

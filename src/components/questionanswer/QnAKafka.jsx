import React, { Component } from "react";
import ListQnA from "./ListQnA";

class QnAKafka extends Component {
  render() {
    console.log("render");
    const languageType = "kafka";

    return (
      <div>
        <div className="container">
          <h1>Kafka Interview Questions</h1>
          <ListQnA languageType={languageType} />
        </div>
      </div>
    );
  }
}

export default QnAKafka;

import React, { Component } from "react";
import ListQnA from "./ListQnA";

class QnAJava extends Component {
  render() {
    console.log("render");
    const languageType = "java";

    return (
      <div>
        <div>
          <h1 className="text-primary mb-5">Java Interview Questions</h1>
          <ListQnA languageType={languageType} />
          <nav class="blog-pagination  p-3 ">
            <a class="btn btn-outline-primary" href="#">
              go to top
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default QnAJava;

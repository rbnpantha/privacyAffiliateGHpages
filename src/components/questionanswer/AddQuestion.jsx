import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import AuthenticationService from "../todo/AuthenticationService.js";
import QnADataService from "../../api/qnaService/QnADataService.js";
import moment from "moment";

class AddQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      createdBy: "",
      createdDate: "",
      languageType: "Java",
      topic: "Core Java",
      subTopic: "Introduction of Java",
      question: "",
      answer: "",
      difficultyLevel: "BEGINNER",
      isLastMinutePreparation: false
    };

    this.handleLanguageTypeChange = this.handleLanguageTypeChange.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
    this.handlesubTopicChange = this.handlesubTopicChange.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleDifficultyLevelChange = this.handleDifficultyLevelChange.bind(
      this
    );
    this.handleLastMinutePreparationChange = this.handleLastMinutePreparationChange.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }
  validate(values) {}

  handleLanguageTypeChange(event) {
    this.setState({ languageType: event.target.value });
  }

  handleTopicChange(event) {
    this.setState({ topic: event.target.value });
  }

  handlesubTopicChange(event) {
    this.setState({ subTopic: event.target.value });
  }

  handleQuestionChange(event) {
    this.setState({ question: event.target.value });
  }

  handleAnswerChange(event) {
    this.setState({ answer: event.target.value });
  }

  handleDifficultyLevelChange(event) {
    this.setState({ difficultyLevel: event.target.value });
  }

  handleLastMinutePreparationChange(event) {
    console.log("flag " + event.target.checked);
    this.setState({
      isLastMinutePreparation: event.target.checked
    });
  }

  onSubmit(values) {
    let username = AuthenticationService.getLoggedInUserName();
    console.log("languageType is : " + this.state.languageType);

    console.log("username is " + username);

    let questionAnswerTO = {
      id: this.state.id,
      createdBy: username,
      createdDate: moment(new Date()).format("YYYY-MM-DD"),
      languageType: this.state.languageType,
      topic: this.state.topic,
      subTopic: this.state.subTopic,
      question: this.state.question,
      answer: this.state.answer,
      difficultyLevel: this.state.difficultyLevel,
      isLastMinutePreparation: this.state.isLastMinutePreparation
    };

    console.log(questionAnswerTO);

    if (this.state.id === -1) {
      console.log("I am inside if block !");
      QnADataService.createQnA(questionAnswerTO);
    } else {
      console.log("I am inside else block !");
      QnADataService.createQnA(questionAnswerTO);
    }

    console.log(values);
  }

  render() {
    return (
      <div className="container">
        <h1>Add Question</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Language</Form.Label>
            <Form.Control
              as="select"
              name="languageType"
              onChange={this.handleLanguageTypeChange}
            >
              <option value="Java">Java</option>
              <option value="Cassandra">Cassandra</option>
              <option value="Kafka">Kafka</option>
              <option value="React">React</option>
              <option value="SQL">SQL</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Topic</Form.Label>
            <Form.Control
              as="select"
              name="topic"
              onChange={this.handleTopicChange}
            >
              <option value="Core Java">Core Java</option>
              <option value="Advance Java">Advance Java</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Sub-Topic</Form.Label>
            <Form.Control
              as="select"
              name="subTopic"
              onChange={this.handleSubTopicChange}
            >
              <option value="Introduction of Java">Introduction of Java</option>
              <option value="Data types and Operators">
                Data types and Operators
              </option>
              <option value="Control Flow statements">
                Control Flow statements
              </option>
              <option value="OOPS and its application in Java">
                OOPS and its application in Java
              </option>
              <option value="Constructors">Constructors</option>
              <option value="Access Modifers in Java">
                Access Modifers in Java
              </option>
              <option value="Exceptions in Java">Exceptions in Java</option>
              <option value="Strings in Java">Strings in Java</option>
              <option value="Collection Framework in Java">
                Collection Framework in Java
              </option>
              <option value="Generics">Generics</option>
              <option value="Input-Output in Java">Input-Output in Java</option>
              <option value="Serialization">Serialization</option>
              <option value="Inner Classes">Inner Classes</option>
              <option value="Statics">Statics</option>
              <option value="Threads in Java">Threads in Java</option>
              <option value="JDBC">JDBC</option>
              <option value="Packages">Packages</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Question</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="write question here"
              name="question"
              onChange={this.handleQuestionChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Answer</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="write answer here"
              name="answer"
              onChange={this.handleAnswerChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Difficulty Level</Form.Label>
            <Form.Control
              as="select"
              name="difficultyLevel"
              onChange={this.handleDifficultyLevelChange}
            >
              <option value="BEGINNER">1</option>
              <option value="INTERMEDIATE">2</option>
              <option value="SENIOR">3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <label>
              Is Last minute preparation ?
              <input
                className="m-2"
                name="isLastMinutePreparation"
                type="checkbox"
                onChange={this.handleLastMinutePreparationChange}
              />
            </label>
          </Form.Group>
          <button className="btn btn-success m-3" type="submit">
            Save
          </button>
        </Form>
      </div>
    );
  }
}

export default AddQuestion;

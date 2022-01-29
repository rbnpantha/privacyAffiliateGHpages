import React, { Component } from "react";
import QnADataService from "../../api/qnaService/QnADataService";
//import AuthenticationService from "AuthenticationService";
//import moment from "moment";

class ListQnA extends Component {
  constructor(props) {
    console.log(props.languageType);
    console.log("constructor");
    super(props);
    this.state = {
      QnAs: [],
      message: null
    };
    this.deleteQnAClicked = this.deleteQnAClicked.bind(this);
    this.updateQnAClicked = this.updateQnAClicked.bind(this);
    this.addQnAClicked = this.addQnAClicked.bind(this);
    this.refreshQnAs = this.refreshQnAs.bind(this);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.refreshQnAs();
    console.log(this.state);
  }

  refreshQnAs() {
    //let username = AuthenticationService.getLoggedInUserName();
    const languageType = this.props.languageType;
    console.log(languageType);
    QnADataService.retrieveQnAsByType(languageType).then(response => {
      console.log("response is " + response);
      this.setState({ QnAs: response.data });
    });
  }

  deleteQnAClicked(id) {
    //let username = AuthenticationService.getLoggedInUserName();
    //console.log(id + " " + username);
    QnADataService.deleteQnA(id).then(response => {
      this.setState({ message: `Delete of QnA ${id} Successful` });
      this.refreshQnAs();
    });
  }

  addQnAClicked() {
    this.props.history.push(`/todos/-1`);
  }

  updateQnAClicked(id) {
    console.log("update " + id);
    this.props.history.push(`/todos/${id}`);
    // /todos/${id}
    // let username = AuthenticationService.getLoggedInUserName()
    // //console.log(id + " " + username);
    // TodoDataService.deleteTodo(username, id)
    //  .then (
    //      response => {
    //         this.setState({message : `Delete of todo ${id} Successful`})
    //         this.refreshTodos()
    //      }
    //  )
  }

  render() {
    console.log("render");
    console.log(this.props.languageType);
    console.log(this.props);

    const items = [
      { name: "home", label: "Home" },
      {
        name: "billing",
        label: "Billing",
        items: [
          { name: "statements", label: "Statements" },
          { name: "reports", label: "Reports" }
        ]
      },
      {
        name: "settings",
        label: "Settings",
        items: [{ name: "profile", label: "Profile" }]
      }
    ];

    let count = 1;
    return (
      <div className="container mt-5">
        {/*  <div class="row">
          <Sidebar items={items} /> */}
        {/* <div className="col-sm-1">
            <div>
              <h1>test</h1>
            </div>
          </div> */}
        <div>
          {this.state.QnAs.map(qns => (
            <div className="mt-10 mb-5" key={qns.questionId}>
              <h3 className="text-left">
                {count++}. {qns.question}
              </h3>
              <p className="text-left">{qns.answer}</p>
            </div>
          ))}
          {/* </div>
          <div className="col-sm-1">
            <div>
              <h1>test</h1>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default ListQnA;

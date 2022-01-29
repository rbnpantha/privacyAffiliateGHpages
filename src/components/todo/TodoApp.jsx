import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./LoginComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import TodoComponent from "./TodoComponent.jsx";
import QnAJava from "../questionanswer/QnAJava.jsx";
import QnA from "../questionanswer/QnA.jsx";
import QnAReact from "../questionanswer/QnAReact.jsx";
import QnAKafka from "../questionanswer/QnAKafka.jsx";
import QnACassandra from "../questionanswer/QnACassandra.jsx";
import QnASQL from "../questionanswer/QnASQL.jsx";
import AddQuestion from "../questionanswer/AddQuestion.jsx";
import Projects from "../questionanswer/Projects.jsx";
import InterviewProcess from "../questionanswer/InterviewProcess.jsx";
import PrepareForInterview from "../questionanswer/PrepareForInterview.jsx";
import QnAPaginationAll from "../questionanswer/QnAPaginationAll.jsx";
import StreamAPIBlog from "../blogs/java/StreamAPIBlog.jsx";
import PrivacyPolicyMain from "../privacy/PrivacyPolicyMain.jsx";
import AddressBookPrivacyPolicy from "../privacy/AddressBookPrivacyPolicy.jsx";
import VocabularyAppPrivacyPolicy from "../privacy/VocabularyAppPrivacyPolicy.jsx";
import InterviewGuidePrivacyPolicy from "../privacy/InterviewGuidePrivacyPolicy.jsx";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <AuthenticatedRoute
                path="/welcome/:name"
                component={WelcomeComponent}
              />
              <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
              <AuthenticatedRoute
                path="/todos"
                component={ListTodosComponent}
              />
              <AuthenticatedRoute path="/logout" component={LogoutComponent} />

              <AuthenticatedRoute
                path="/addQuestion/:id"
                component={AddQuestion}
              />

              <Route path="/qaHome" component={QnA} />

              <Route path="/questions" component={QnAJava} />

              <Route path="/java" component={QnAJava} />

              <Route path="/kafka" component={QnAKafka} />

              <Route path="/cassandra" component={QnACassandra} />

              <Route path="/react" component={QnAReact} />

              <Route path="/sql" component={QnASQL} />

              <Route path="/projects" component={Projects} />

              <Route path="/interviewProcess" component={InterviewProcess} />

              <Route path="/all" component={QnAPaginationAll} />

              <Route path="/privacyPolicyMain" component={PrivacyPolicyMain} />

              <Route
                path="/addressBookPrivacyPolicy"
                component={AddressBookPrivacyPolicy}
              />

              <Route
                path="/vocabularyAppPrivacyPolicy"
                component={VocabularyAppPrivacyPolicy}
              />

              <Route
                path="/interviewGuidePrivacyPolicy"
                component={InterviewGuidePrivacyPolicy}
              />

              <Route path="/blog/java/streamAPI" component={StreamAPIBlog} />

              <Route
                path="/prepareForInterview"
                component={PrepareForInterview}
              />

              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
        {/*<LoginComponent/>
                <WelcomeComponent/>*/}
      </div>
    );
  }
}

export default TodoApp;

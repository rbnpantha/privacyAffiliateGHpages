import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    //console.log(isUserLoggedIn);

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="aboutUs" className="navbar-brand">
              INTERVIEW GUIDE
            </a>
          </div>
          <ul className="navbar-nav">
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/welcome/in28minutes">
                  Home
                </Link>
              </li>
            )}
            <li>
              <Link className="nav-link" to="/qaHome">
                Interview Guide Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/questions">
                Interview Guide
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/all">
                QnA Pagination All
              </Link>
            </li>

            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/todos">
                  Todos
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/addQuestion/-1">
                  Add Questions
                </Link>
              </li>
            )}
            <div>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/blog/java/streamAPI">
                Stream API
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/interviewProcess">
                Interview Process
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/prepareForInterview">
                Prepare For Interview
              </Link>
            </div>
            <div>
              <Link className="nav-link" to="/privacyPolicyMain">
                Privacy Policy
              </Link>
            </div>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;

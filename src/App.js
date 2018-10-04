import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Welcome from "./pages/Welcome";
import Auth from "./utils/Auth";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {PropsRoute, PrivateRoute, LoggedOutRoute} from "./components/Routes";
import { BrowserRouter as Router, Link, Switch} from "react-router-dom";

class App extends Component {

  state = {
    authenticated: false,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R0ZXN0QHRlc3QuY29tIiwidXNlcklkIjoxOSwiaWF0IjoxNTM3Mzk5MDQ1LCJleHAiOjE1Mzc0MDI2NDV9.8tPb2MKm7mFcIf4K7O8nDSp4zS2Ml1uhAKPdOD5UvoA",
    userId: 1
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <React.Fragment>
      <Header/>
      <Router>
        <Switch>
            {/* <Welcome exact path="/"></Welcome>
            <Main exact path="/main" token={this.state.token} ></Main> */}
            <PropsRoute exact path="/" component={this.state.authenticated ? Main : LoginPage}
                                      toggleAuthenticateStatus={this.toggleAuthenticateStatus}
                                      authenticated={this.state.authenticated}/>
            <LoggedOutRoute path="/signup" component={SignupPage} 
                                            toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
            {/* <PropsRoute exact path="/about" component={About} />
            <PrivateRoute exact path="/budgets" component={Leaderboard} />
            <PropsRoute exact path="/transactions" component={Contact} />
            <PropsRoute path="/logout" component={LogoutFunction} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/> */}
          </Switch>
      </Router>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Welcome from "./pages/Welcome";
import LogoutFunction from "./components/LogoutFunction";
import Auth from "./utils/Auth";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {PropsRoute, PrivateRoute, LoggedOutRoute} from "./components/Routes";
import { BrowserRouter as Router, Link, Switch} from "react-router-dom";

class App extends Component {

  state = {
    authenticated: false
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
            <PropsRoute path="/logout" component={LogoutFunction} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
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

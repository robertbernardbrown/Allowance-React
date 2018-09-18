import React, { Component } from "react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Link, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Main exact path="/"></Main>
            {/* <PropsRoute exact path="/" component={Main}/>
            <PropsRoute exact path="/about" component={About} />
            <PrivateRoute exact path="/budgets" component={Leaderboard} />
            <PropsRoute exact path="/transactions" component={Contact} />
            <LoggedOutRoute path="/signup" component={SignupPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
            <PropsRoute path="/logout" component={LogoutFunction} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/> */}
          </Switch>
      </Router>
    );
  }
}

export default App;

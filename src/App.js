import React, { Component } from "react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Link, Switch} from "react-router-dom";

class App extends Component {

  state = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R0ZXN0QHRlc3QuY29tIiwidXNlcklkIjoxOSwiaWF0IjoxNTM3MzkxMzU1LCJleHAiOjE1MzczOTQ5NTV9.FTyJk6AS9qhcQ42o940Ia0uE30Goj3QumQONHbZCCOM"
  }

  render() {
    return (
      <Router>
        <Switch>
            <Main token={this.state.token} exact path="/"></Main>
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

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auth from '../../utils/Auth';
import LoginForm from '../../components/Login';
import API from '../../utils/API';

class LoginPage extends Component {
  // set the initial component state
  state = {
    errors: {},
    successMessage: '',
    user: {
      userEmail: '',
      userPassword: ''
    }
  }
  
  componentDidMount(){
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    this.setState({ successMessage });
  }
  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm = event => {
    event.preventDefault();
    const { userEmail, userPassword } = this.state.user;

    API.login({userEmail, userPassword}).then(res => {

        Auth.authenticateUser(res.data.token);

        this.props.toggleAuthenticateStatus()

        // redirect signed in user to dashboard
        this.props.history.push('/');
    })
    .catch(( {response} ) => {
        const errors = response.data.errors ? response.data.errors : {};
        errors.summary = response.data.message;

        this.setState({
          errors
        });
      });
  }

  /**
   * Change the user object.
   * @param {object} event - the JavaScript event object
   */
  changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  setUser = user => {
    this.setState({
      user
    })
  }

  render() {
    return (
        <React.Fragment>
            <LoginForm
            onSubmit={this.processForm}
            onChange={this.changeUser}
            errors={this.state.errors}
            successMessage={this.state.successMessage}
            user={this.state.user}
            setUser={this.setUser}
            authenticated={this.props.authenticated} 
            toggleAuthenticateStatus={this.props.toggleAuthenticateStatus}
            />
        </React.Fragment>
    );
  }

}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired,
  toggleAuthenticateStatus: PropTypes.func,
  authenticated: PropTypes.bool
};

export default LoginPage;
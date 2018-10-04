import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../../components/Signup';
import API from '../../utils/API';

class SignupPage extends React.Component {
  // set the initial component state
  state = {
    errors: {},
    user: {
      userEmail: '',
      userName: '',
      userPassword: ''
    }
  }

  /**
   * Process the form.
   * @param {object} event - the JavaScript event object
   */
  processForm = event => {
    event.preventDefault();
    
    // create a string for an HTTP body message
    const { userName, userEmail, userPassword } = this.state.user;

    API.signUp({userName, userEmail, userPassword}).then(res => {
        localStorage.setItem('successMessage', res.data.message);

        this.setState({
          errors: {}
        });
        // redirect user after sign up to login page
        this.props.history.push('/');

    }).catch(( {response} ) => {
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

  render() {
    return (
      <React.Fragment>
        <SignUpForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      </React.Fragment>
    );
  }

}

SignupPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignupPage;
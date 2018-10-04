import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({onSubmit,onChange,errors,successMessage,user}) => (
  <div className="inner-display-div">
    <h2 className="login-heading">Login</h2>
    <form action="/" onSubmit={onSubmit}>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <input
            placeholder={errors.userEmail ? errors.userEmail.toString() : "Email"}
            name="userEmail"
            className={errors.userEmail ? "has-error" : ""}
            onChange={onChange}
            value={user.userEmail}
        />
      </div>

      <div className="field-line">
        <input
            placeholder={errors.userPassword ? errors.userPassword.toString() : "Password"}
            type="password"
            name="userPassword"
            onChange={onChange}
            className={errors.userPassword ? "has-error" : ""}
            value={user.userPassword}
        />
      </div>

      <div className="button-line">
        <button className="btn btn-primary btn-block" type="submit">Log-In</button>
      </div>

      <p>Don't have an account? <br/> <Link to={'/signup'} id="sign">Create&nbsp;one</Link>.</p>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  toggleAuthenticateStatus: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default LoginForm;
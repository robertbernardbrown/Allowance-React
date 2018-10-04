import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignUpForm = ({onSubmit,onChange,errors,user}) => (
  <div className="container">
    <div className="inner-display-div">
      <h2 className="card-heading">Sign Up</h2>
      <form action="/" onSubmit={onSubmit}>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <input
              placeholder={errors.userName ? errors.userName.toString() : "Username"}
              name="userName"
              className={errors.userName ? "has-error" : ""}
              onChange={onChange}
              value={user.userName}
          />
        </div>

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
          <button className="btn btn-primary btn-block" type="submit">Sign-Up</button>
        </div>

        <p>Already have an account? <br/><Link to={'/'} id="sign">Log in</Link></p>
      </form>
    </div>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
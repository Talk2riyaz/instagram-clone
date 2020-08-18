import React, { useState, useEffect } from "react";
import joi from "joi-browser";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "./../../Components/Spinner/Spinner";
import * as actions from "../../store/actions/SignUp";
const SignUp = ({
  history,
  signUpSuccess,
  onInitSignUp,
  onSetSignUpLoader,
  isLoading,
  error,
}) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formVaildationError, setFormVaildationError] = useState(" ");
  useEffect(() => {
    if (signUpSuccess) {
      history.push("/");
    }
  });

  const schema = {
    username: joi.string().min(3).required().label("Username"),
    email: joi.string().email().required().label("Email"),
    password: joi.string().min(5).required().label("Password"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetSignUpLoader();
    onInitSignUp(userName, email, password);
  };

  const validateProperty = () => {
    const data = {
      username: userName,
      email: email,
      password: password,
    };

    const { error } = joi.validate(data, schema);
    if (error) {
      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      setFormVaildationError(errors);
    }
    if (!error) {
      setFormVaildationError(null);
    }
  };

  console.log(formVaildationError);

  return (
    <div className="content-wrapper d-flex justify-content-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit} className="m-10 w-400 mw-full" noValidate>
          <div className="form-group mb-10">
            <label htmlFor="username" className="required">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              required="required"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                validateProperty();
              }}
            />
          </div>
          {formVaildationError ? (
            <div className="d-flex justify-content-center text-danger">
              {formVaildationError.username}
            </div>
          ) : null}
          <div className="form-group mb-10">
            <label htmlFor="Email" className="required">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              required="required"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateProperty();
              }}
            />
            {formVaildationError && (
              <div className="mt-10 d-flex justify-content-center text-danger">
                {formVaildationError.email}
              </div>
            )}
          </div>
          <div className="form-group  mb-10">
            <label htmlFor="password" className="required">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required="required"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validateProperty();
              }}
            />
            {formVaildationError && (
              <div className="mt-10 d-flex justify-content-center text-danger">
                {formVaildationError.password}
              </div>
            )}
          </div>

          <input
            className="btn btn-primary btn-block"
            type="submit"
            disabled={formVaildationError}
            value="Sign up"
          />
          <div className="d-flex justify-content-end mt-10">
            Already have an account
            <Link to="/login">
              <span className="m-5">Login</span>
            </Link>
          </div>
          {error === 400 ? (
            <div className="alert alert-danger filled mt-20" role="alert">
              <button
                className="close"
                data-dismiss="alert"
                type="button"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              Email Id already exists
            </div>
          ) : null}
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.signUp.error,
    isLoading: state.signUp.loader,
    signUpSuccess: state.signUp.signUpSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitSignUp: (userName, email, password) =>
      dispatch(actions.initSignUp(userName, email, password)),
    onSetSignUpLoader: () => dispatch(actions.setSignUpLoader()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

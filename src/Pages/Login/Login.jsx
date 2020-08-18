import React, { useState, useEffect } from "react";
import joi from "joi-browser";
import * as action from "../../store/actions/login";
import Spinner from "../../Components/Spinner/Spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Login = ({
  history,
  onLogin,
  isLoggedIn,
  isLoading,
  onSetLoginLoader,
  error,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formVaildationError, setFormVaildationError] = useState(" ");

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const schema = {
    email: joi.string().email().required().label("Email"),
    password: joi.string().min(5).required().label("Password"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetLoginLoader();
    onLogin(email, password);
  };

  const validateProperty = () => {
    const data = {
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

  return (
    <div className="content-wrapper d-flex justify-content-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <form
          onSubmit={handleSubmit}
          method="..."
          noValidate
          className=" aligin-items-center m-10 w-400 mw-full"
        >
          <div className="form-group">
            <label htmlFor="Email" className="required">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              // required="required"
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
          <div className="form-group">
            <label htmlFor="password" className="required">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              // required="required"
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
            value="Login"
            disabled={formVaildationError}
          />
          <div className="d-flex justify-content-end mt-10">
            Don't have a account?
            <Link to="/sign-up">
              <span className="m-5">Sign Up</span>
            </Link>
          </div>

          {error ? (
            <div className="alert alert-danger filled mt-20" role="alert">
              <button
                className="close"
                data-dismiss="alert"
                type="button"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              Invalid UserName and Password
            </div>
          ) : null}
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLogin,
  isLoading: state.login.loader,
  error: state.login.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(action.initLogin(email, password)),
    onSetLoginLoader: () => dispatch(action.setLoginLoader()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

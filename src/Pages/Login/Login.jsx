import React, { useState, useEffect } from "react";
import * as action from "../../store/actions/login";
import { connect } from "react-redux";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.isLoggedIn) {
      props.history.push("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.onLogin(email, password);
  };
  return (
    <div className="content-wrapper m-10 d-flex justify-content-center">
      <form onSubmit={handleSubmit} method="..." className="w-400 mw-full  ">
        <div className="form-group">
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-text">Email must be in valid format</div>
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
            required="required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-text">
            Must be at least 8 characters long, and contain at least one special
            character.
          </div>
        </div>

        <input
          className="btn btn-primary btn-block"
          type="submit"
          value="Sign up"
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ isLoggedIn: state.login.isLogin });

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(action.initLogin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const SignUp = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
      displayName: userName,
    };
    axios
      .post(
        await "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVojDzKwRxZzm4p4HC7rL11U5cUkqKS-I",
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("displayName", userName);
      })
      .then(() => {
        localStorage.getItem("token")
          ? props.history.push("/")
          : props.history.push("/login");
        window.location.reload();
      })

      .catch((error) => alert(error.message));
  };
  return (
    <div className="content-wrapper m-10 d-flex justify-content-center">
      <form onSubmit={handleSubmit} method="..." className="w-400 mw-full  ">
        <div className="form-group">
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
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="form-text">
            Only alphanumeric characters and underscores allowed.
          </div>
        </div>
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
        <div className="d-flex justify-content-end mt-10">
          Don't have a account?{" "}
          <Link to="/login">
            <span className="m-5">Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

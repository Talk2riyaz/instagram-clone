import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import halfmoon from "halfmoon";
import NavBar from "./Components/NavBar/NavBar";
import PostsArea from "./Pages/PostsArea/PostsArea";
import AddPost from "./Pages/AddPost/AddPost";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

function App({ isLogin }) {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, []);

  return (
    <>
      <div className="page-wrapper with-navbar">
        <NavBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          {isLogin ? (
            ((<Route path="/add-post" component={AddPost} />),
            (<Route exact path="/" component={PostsArea} />))
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )}
        </Switch>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
    displayName: state.login.loginResponse[0]?.displayName,
  };
};

export default connect(mapStateToProps)(App);

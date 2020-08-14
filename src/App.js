import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import halfmoon from "halfmoon";
import NavBar from "./Components/NavBar/NavBar";
import Posts from "./Components/Posts/Posts";
import AddPost from "./Pages/AddPost/AddPost";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

function App() {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, []);

  return (
    <div className="page-wrapper with-navbar">
      <NavBar />
      <Switch>
        <Route path="/add-post" component={AddPost} />4
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Posts} />
      </Switch>
    </div>
  );
}

export default App;

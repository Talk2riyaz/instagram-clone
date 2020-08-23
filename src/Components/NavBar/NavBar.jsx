import React from "react";
import halfmoon from "halfmoon";
import { Link, withRouter } from "react-router-dom";
import * as action from "../../store/actions/login";
import { connect } from "react-redux";

const NavBar = (props) => {
  const handleLogout = () => {
    props.onLogOut();
    console.log(props);
    props.history.push("/login");
  };

  return (
    <nav className="navbar">
      <div className="container justify-content-between">
        <Link to="/">
          <span className="navbar-brand">
            <i className="fa fa-instagram"></i>
          </span>
        </Link>
        <div className="navbar-content ">
          {props.isLogin ? (
            <div>
              <div className="dropdown m-20">
                <button
                  className="btn"
                  data-toggle="dropdown"
                  type="button"
                  id="dropdown-toggle-btn-1"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Welcome {props.displayName}
                  <i className="fa fa-angle-down ml-5" aria-hidden="true"></i>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdown-toggle-btn-1"
                  style={{ cursor: "pointer" }}
                >
                  <h6 className="dropdown-header" onClick={handleLogout}>
                    Logout
                  </h6>
                </div>
              </div>
              <Link to="/add-post">
                <button className="btn btn-default mr-15">
                  <i className="fa fa-plus"></i>
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <span
                  style={{
                    fontSize: "35px",
                  }}
                >
                  <i className="fa fa-user m-20"></i>
                </span>
              </Link>
            </div>
          )}

          <button
            className="btn btn-action mr-5"
            type="button"
            onClick={() => halfmoon.toggleDarkMode()}
            aria-label="Toggle dark mode"
          >
            <i className="fa fa-moon-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
    displayName: state.login.loginResponse[0]?.displayName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(action.logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));

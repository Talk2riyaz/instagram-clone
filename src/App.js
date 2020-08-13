import React, { useEffect } from "react";
import halfmoon from "halfmoon";
import NavBar from "./Components/NavBar/NavBar";
import Posts from "./Components/Posts/Posts";

function App() {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, []);

  return (
    <div className="page-wrapper with-navbar">
      <NavBar />
      <Posts />
    </div>
  );
}

export default App;

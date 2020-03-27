import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Navigationbar from "./Components/Navbar"

function App() {
  return (
    <div>
      <Navigationbar/>
      <Header />
    </div>
  );
}

export default App;

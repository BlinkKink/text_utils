import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  // useState to toggle Dark mode
  const [mode, setMode] = useState("light");
  // useState for alertz
  const [alert, setAlert] = useState("");
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2d264a";
      showAlert("Dark mode enabled", "success");
      setTimeout(() => {
        document.title = "TextUtils";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>

            <Route
              exact
              path="/"
              element={
                <TextForm heading="Enter text to analyze below" mode={mode} />
              }
            ></Route>
            <Route
              exact
              path="/text_utils"
              element={
                <TextForm heading="Enter text to analyze below" mode={mode} />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

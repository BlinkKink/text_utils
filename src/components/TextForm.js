import React, { useState } from "react";

export default function TextForm(props) {
  // Uppercase Function
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  // Lowercase Function
  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  // ClearText Function
  const handelClearClick = () => {
    let newText = "";
    setText(newText);
  };
  // Copy Function
  const handelCopyClick = () => {
    // let myBox = document.getElementById("myBox");
    navigator.clipboard.writeText(text);
  };
  // ExtraSpaces Function
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  //
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  //
  const [text, setText] = useState("");
  //
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h1 className="my-3">{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            onChange={handelOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#434064" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handelUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handelLoClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handelClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handelCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="my-3">Your text summary</h2>
        <p>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read{" "}
        </p>
        <h3 className="my-3">Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

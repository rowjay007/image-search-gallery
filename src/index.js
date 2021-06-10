import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ImageProvider from "./components/ImageProvider";

ReactDOM.render(
  <React.StrictMode>
    <ImageProvider>
      <App />
    </ImageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

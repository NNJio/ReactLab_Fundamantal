import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HelloComponent from "./components/HelloComponent.jsx";
//! Create Component
//! Funciton
// function HelloComponnt(){
//   return <h1>Hello Component</h1>
// }
//! Class
// class HelloConponent extends React.Component{
//   render(){
//     return <h1>Hello Component</h1>
//   }
// }
//!
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloComponent /> */}
    <App />
  </React.StrictMode>
);

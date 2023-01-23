import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/Header.module.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Produto from "./components/Produto";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Produto />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

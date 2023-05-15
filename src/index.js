//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import { BrowserRouter as Router } from 'react-router-dom';

//ReactDOM.render(
 // <Router>
 //   <App/>
//  </Router>,
 // document.getElementById("root")
//)//;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
  <StateProvider initialState={initialState} reducer={reducer}>
      <App />
      </StateProvider>
  </Router>
);
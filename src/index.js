import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/Todolist.css"
import Todolist from "./components/Todolist";
  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <Todolist />
    </div>,
    destination
);
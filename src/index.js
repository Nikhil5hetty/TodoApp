import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/Todolist.css"
import Todolist from "./components/Todolist";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <Todolist />
    </div>,
    destination
);
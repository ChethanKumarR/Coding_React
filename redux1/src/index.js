//portion able to connect to the view
import React from "react";
import ReactDOM  from "react-dom";
import Home from "./container/Home"
import {Provider} from "react-redux";
import store from "./store/store_file";
//import store from "./store";

//Rendering React Element into a React DOM node
//Coonected view to the store
ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>, document.getElementById("root")
)

//portion able to connect to the view
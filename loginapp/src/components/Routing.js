import React from "react";
import {BrowserRouter , Route} from "react-router-dom";
import Header from "./Header";
import LoginComponent from "./LoginComponent";
import Profile from "./Profile";
import RegisterComponent from "./RegisterComponent";
import UserList from "./Userlist";


const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}></Route>
                <Route path="/login" component={LoginComponent}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/users" component={UserList}></Route>
            </BrowserRouter>
        </div>
    )
}

export default Routing;
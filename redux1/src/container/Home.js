import React, {Component} from "react";
import {connect} from "react-redux";
import {moviesList} from "../actions/actions_file";
import PropTypes from "prop-types";
import DisplayComponent from "../component/displayComponent"

//Step1 -----> View is calling the action  
class Home extends Component {

    componentDidMount(){
        this.props.dispatch(moviesList())
    }
   render(){
       return(
           <div>
               <h1>Redux</h1>
               <DisplayComponent  datalist={this.props.mydata}/>
           </div>
       )
   }
}

//We will recieve the state from the store
function mapStateToprops(state) {
//  console.log("mapStateToprops" , state)
    return{
        mydata:state.movies
    }
}
//Inherit dispath for Home
//dispatch is not default available we have to inherit it from the PropTypes package
Home.protoTypes = {
    dispatch : PropTypes.func
}

export default connect (mapStateToprops)(Home)

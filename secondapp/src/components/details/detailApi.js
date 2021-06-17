import React, { Component } from "react";
import axios from "axios";
import DisplayHotel from "./DisplayHotel";

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"
class HotelDetails extends Component {
    constructor() {
        super();
        this.state = {
           details:''
        }
    }
    async componentDidMount() {
        let hotelid = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelid}`)
        sessionStorage.setItem("hotelName", response.data[0].name)
        // console.log("response.data" , response.data[0]);
        console.log("response.data" , response.data);
        this.setState({details:response.data[0]})
    }

    // componentDidMount() {
    //     var hotelid = this.props.match.params.id;
    //     axios.get(`${url}/${hotelid}`)
    //     .then((response) => { console.log("response.data" , response.data[0])})
    //     .catch((err) => { this.setState({ listData: err }) })
    // }
    render() {
        return(
            <DisplayHotel hoteldata={this.state.details}></DisplayHotel>
        )
    }
}

export default HotelDetails;
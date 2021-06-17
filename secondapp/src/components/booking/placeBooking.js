import axios from "axios";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const bookingurl = "https://developerfunnel.herokuapp.com/hotelsdetails";

class PlaceOrder extends Component {
    constructor() {
        super();
        this.state = {
            //If this is the requirement of order of data for the POST API then we dont go for constructing the  data inside handleSubmit function
            order_id: Math.floor(Math.random() * 1000),
            hotel_name:sessionStorage.getItem("hotelName"), //using session storage - one way (get the data very faster comapared to second method using API call)
            //hotel_name: '',
            name: '',
            phone: ''
        }
    }
    //second way --- using api call
    // async componentDidMount() {
    //     let hotelid = this.props.match.params.id;
    //     let response = await axios.get(`${bookingurl}/${hotelid}`)
    //     this.setState({ hotel_name: response.data[0].name })
    // }

    handleChangeName = (event) => {
        this.setState({name:event.target.value})
    }

    handleChangePhone = (event) => {
       this.setState({phone:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state);
        //If somebody ask us to send a data in a required format
        //construct the data like below


        // var data =  {
        //     name:this.state.hotel_name,
        //     person:this.state.name
        // }

        fetch(bookingurl, {
           method: 'POST',
           headers:{
               'Accept':'appllication/json',
               'Content-Type': 'application/json',
               'Auth': 'token8348848'
           },
           body:JSON.stringify(this.state)
        }) 
        .then(this.props.history.push('/viewBookings?message=success'))
        .catch(this.props.history.push('/viewBookings?message=fail'))
    }
    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        place booking
                     </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Order Id</label>
                            <input type="text" name="order_id" value={this.state.order_id}
                                readOnly className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Hotel name</label>
                            <input type="text" name="hotel_name" value={this.state.hotel_name}
                                readOnly className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" value={this.state.name}
                                className="form-control" onChange={this.handleChangeName} />
                        </div>
                        <div className="form-group">
                            <label>phone</label>
                            <input type="text" name="hotel_name" value={this.state.phone}
                                className="form-control" onChange={this.handleChangePhone} />
                        </div>
                        <Link to={`/details/${this.props.match.params.id}`} className="btn btn-danger">Back</Link>
                        &nbsp;
                        <button className="btn btn-success" onClick={this.handleSubmit}>submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaceOrder;
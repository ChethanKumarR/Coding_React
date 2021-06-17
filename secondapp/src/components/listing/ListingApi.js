import React, { Component } from "react";
import axios from "axios";
import ListingDisplay from "./ListingDisplay";
import RoomFilter from "../filters/roomFilter";
import CostFilter from "../filters/costFilter";

const listUrl = "https://developerfunnel.herokuapp.com/hotellist"

class ListingApi extends Component {
    constructor() {
        super()
        this.state = {
            listData: ''
        }
    }
    setDataPerFilter(sortedData) {
        this.setState({
            listData:sortedData
        })
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <RoomFilter roomperType={(data)=>{this.setDataPerFilter(data)}}/>
                        <CostFilter roomPerCost={(data)=>{this.setDataPerFilter(data)}}/>
                    </div>
                    <div className="col-md-10">
                        {/* <h2>Listing Details for id {this.props.match.params.id}</h2> */}
                        <ListingDisplay listRecord={this.state.listData}></ListingDisplay>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        var tripId = this.props.match.params.id;
        sessionStorage.setItem('tripId' , tripId);
        axios.get(`${listUrl}/${tripId}`)
        .then((response) => { this.setState({ listData: response.data }) })
        .catch((err) => { this.setState({ listData: err }) })
    }
}
export default ListingApi;
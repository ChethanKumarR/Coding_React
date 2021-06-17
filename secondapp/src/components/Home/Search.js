
import React, { Component } from "react";
import "./Search.css";
import { withRouter } from "react-router-dom";

// const Search = () => {
//     return (
//         <div>
//              <h1>Search Page</h1>
//         </div>
//     )
// }

// export default Search;

const lurl = "https://developerfunnel.herokuapp.com/location";
const hurl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component {
    constructor(props) {
        console.log("Inside the constructor");
        super(props);
        this.state = {
            location: '',
            hotel: ''
        }
    }

    //To dispaly the city
    renderCity = (data) => {
        console.log("data>>>>>>>", data);
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        } 
        // else {
        //     return (
        //         <option>
        //             No data found
        //         </option>
        //     )
        // }
    }

    //To display the hotel
//     handleCity =(event)=>{
//         const cityId = event.target.value;
//         //console.log("cityId", cityId);
//         const url = hurl+cityId
//         fetch(hurl+cityId, {method:'GET'})
//             .then((res) => res.json())
//             .then((data) => {console.log(data)}
//     //    .then((data) => {this.setState({hotel:data})})
//    }


//To display Hotels
renderHotel = (data) => {
    if(data) {
        return data.map((item) => {
            return (
                <option value={item._id}>
                    {item.name} | {item.city_name}
                </option>
            )
        })
    }
}
// TO display Hotel wrt to city 
handleCity =(event)=>{
    const cityId = event.target.value;
    console.log("cityId" , cityId)
    const url = hurl+cityId
    fetch(hurl+cityId,{method:'GET'})
    .then((res) => res.json())
    //.then((data) => {console.log(data)})
    .then((data) => {this.setState({hotel:data})})
}

handleHotel=(event)=>{
    console.log("this.props" , this.props);
    this.props.history.push(`/details/${event.target.value}`)
}
    render() {
        console.log("Inside the render method")
        return (
            <div className="imageContainer">
                <div id="logo">
                    <b>D!</b>
                </div>
                <div className="heading">
                    Plan Your trip with Us!
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>----SELECT CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handleHotel}>
                        <option>----SELECT HOTEL----</option>
                        {this.renderHotel(this.state.hotel)}
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log("Inside the componentDidMount function ")
            //  Make api call
            //  We will get the response
            //  From the response we will ger the data
        fetch(lurl, { method: 'GET' })
            //.then((response) => {console.log(response.json())})
            // .then((data) => {console.log(data)})
            // .catch((err) => {console.log(err)})
            .then((response) => response.json())
            .then((data) => { this.setState({ location: data }) })
            .catch((err) => { console.log(err) })
    }
}

export default withRouter(Search);
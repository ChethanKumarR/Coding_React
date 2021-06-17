import React from "react";
import { Link } from "react-router-dom";
import "./QuickDisplay.css";

const QuickSearch = (props) => {
    console.log("Entering in to Quick Display");
    const tripRender = ({tripData}) => {
        if (tripData) {
            //This return is for triprender
            return tripData.map((item) => {
                console.log("chethan" , item.name)
                //This return is for map
                return (
                    <Link to={`/list/${item.trip}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src= {item.image} alt="NoImage"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">{item.name}</div>
                                <div className="componentSubHeading">start your {item.name} trip with us</div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    //This return is for QuickSearch
    return (
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">Quick Search</p>
                <p className="quickSearchSubHeading">Discover Trip By Type</p>
                <br/>
                {tripRender(props)}
            </div>
        </div>
    );
};

export default QuickSearch;

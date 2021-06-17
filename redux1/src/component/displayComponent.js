import React from "react";



const MovieDisplay = (props) => {
    const renderMovies = ({ datalist }) => {
        if (datalist) {
            return datalist.map((item) => {
                return (
                    <div>{item.id} {item.name}</div>
                )
            })
        }
    }
    return (
        <div>
            {renderMovies(props)}
        </div>
    )
}

export default MovieDisplay;
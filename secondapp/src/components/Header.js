import React from "react";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="www.youtube.com">Developer Funnel</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Hotels">Hotels</Link></li>
                                <li><Link to="/viewbookings">Bookings</Link></li>
                                <li><Link to="/lifecycle">Lifecycle</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header;
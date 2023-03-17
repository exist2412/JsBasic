import React from "react";
import {
    Link, NavLink
  } from "react-router-dom";

class NavigationBar extends React.Component {
    render() {
        return(
            <div className="container">
                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav ml-auto mr-md-3">
                        <li class="nav-item">
                            {/* <Link to="/" className="nav-link">Home</Link> */}
                            <NavLink
                                to="/" exact
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                                >
                                Home
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            {/* <Link to="/about" className="nav-link">About</Link> */}
                            <NavLink
                                to="/about"
                                className={isActive =>
                                    "nav-link" + (!isActive ? "" : "")
                                }
                                >
                                About
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            {/* <Link to="/app" className="nav-link">Crud App</Link> */}
                            <NavLink
                                to="/app"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                                >
                                Crud App
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            {/* <Link to="/app" className="nav-link">Crud App</Link> */}
                            <NavLink
                                to="/users"
                                className={isActive =>
                                    "nav-link" + (!isActive ? " unselected" : "")
                                }
                                >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavigationBar;
import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="section">
                    Home
                </div>
            </div>
        )
    }
}

export default withRouter(Home);
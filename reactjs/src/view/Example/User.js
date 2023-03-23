import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class User extends React.Component {

    state = {
        user:{}
    }

    async componentDidMount() {
        try {
            if(this.props.match && this.props.match.params) {
                let id = this.props.match.params.id;
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                this.setState({
                    user: response && response.data && response.data.data ? response.data.data : {}
                })
                // console.log(response);
            }
            
          } catch (error) {
            console.error(error);
          }
    }

    BackToPrevious = () => {
        this.props.history.push('/users')
    }

    render() {
        let { user } = this.state;
        let isEmpty = Object.keys(user).length === 0;
        return(
            <>
                <div className="container">
                    <div className="section">
                        {isEmpty === false && 
                            <>
                                <img src={user.avatar} alt={user.last_name} />
                                <p>{user.first_name} - {user.last_name}</p>
                                <p>{user.email}</p>
                                <button onClick={() => this.BackToPrevious()}>Back</button>
                            </>
                        }
                        
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(User);
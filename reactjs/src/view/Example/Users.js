import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Users extends React.Component {

    state = {
        users: []
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://reqres.in/api/users?page=1');
            this.setState({
                users: response && response.data && response.data.data ? response.data.data : []
            })
            //console.log(response);
          } catch (error) {
            console.error(error);
          }
    }

    ViewDetail = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { users }  = this.state;
        return(
            <div className="container">
                <div className="section">
                <div className="read_block">
                        <ul className="row">
                            {
                                users && users.length > 0 &&
                                users.map((item, index) => {
                                    return(
                                        <li key={item.id} className="flex-50" onClick={() => this.ViewDetail(item)}>
                                            <img src={item.avatar} alt={item.last_name} />
                                            <span> {item.last_name} </span>        
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Users);
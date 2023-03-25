import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class Home extends React.Component {

    handleDelete = (user) => {
        this.props.deleteUser(user);
    }

    handlecreateUser = () => {
        this.props.createUser();
    }

    render() {
        let users  = this.props.dataRedux;
        return(
            <div className="container">
                <div className="section">
                    <div className="read_block">
                        <ul>
                            {
                                users && users.length > 0 &&
                                users.map((item, index) => {
                                    return(
                                        <li key={item.id}>
                                            <span>{item.id} - {item.name} </span>   
                                            <button className="btn" type="submit"
                                                onClick={() => this.handleDelete(item)}
                                            >
                                                <span>Delete</span>
                                            </button>     
                                        </li>
                                    )
                                })
                            }
                            <button className="button_in" type="submit"
                                onClick={() => this.handlecreateUser()}
                            >Add</button>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (user)=> dispatch({
            type: 'Delete_user',
            payload: user
        }),
        createUser: ()=> dispatch({
            type: 'Create_user',
        })    
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
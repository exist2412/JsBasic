import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Nguyen',
        age: '27'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    } 
    render() {
        return (
            <>
                <div className="">
                    <div>
                        My name is {this.state.name}
                        
                    </div>
                    <input type="text" value={this.state.name} onChange = {(event) => this.handleOnChangeName(event)} />
                </div>
            </>
        )
    }
}

export default MyComponent;
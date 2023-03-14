import React from "react";
import { toast } from 'react-toastify'

class AddCoins extends React.Component {

    state = {
        name: '',
        short_name: '',
        price: ''
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeShortName = (event) => {
        this.setState({
            short_name: event.target.value
        })
    }

    handleOnChangePrice = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    save = () => {
        if(!this.state.name || !this.state.short_name || !this.state.price) {
            toast.error('Vui lòng nhập đầy đủ')
            return
        }
        let current = {
            name: this.state.name,
            price:this.state.price,
            short_name: this.state.short_name
        }
        this.props.addCoin(current);
        this.setState({
            name: '',
            short_name: '',
            price: ''
        })
    }

    render() {
        let { name, short_name, price } = this.state;
        return (
            <>
                <div className="create_block">
                    <input className="submit_in" type="text" value={name} 
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    <input className="submit_in" type="text" value={short_name} 
                        onChange={(event) => this.handleOnChangeShortName(event)}
                    />
                    <input className="submit_in" type="text" value={price} 
                        onChange={(event) => this.handleOnChangePrice(event)}
                    /><br/><br/>
                    <button className="button_in" type="submit"
                        onClick={() => this.save()}
                    >Add</button>
                </div>
            </>
        )
    }
}

export default AddCoins;
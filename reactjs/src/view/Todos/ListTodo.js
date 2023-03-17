import React from "react";
import AddCoins from "./AddCoins";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listCoins: [
            {
                name: 'Bitcoin',
                short_name: 'BTC',
                price: '30000$'
            },
            {
                name: 'Ethereum',
                short_name: 'ETH',
                price: '1677$'
            },
            {
                name: 'Binance',
                short_name: 'BNB',
                price: '307$'
            }
        ],
        selectItem: {}
    }

    addCoin = (coin) => {
        this.setState({
            listCoins: [...this.state.listCoins, coin]
        })
        toast.success("Thêm Thành Công!");
    }

    delCoin = (coin) => {
        let list_item = this.state.listCoins;
        list_item = list_item.filter(item => item.name !== coin.name)
        this.setState({
            listCoins: list_item
        })
        toast.info("Xóa thành công!");
    }

    editCoin = (coin) => {
        let { listCoins, selectItem } = this.state;
        
        let isEmpty = Object.keys(selectItem).length === 0;
        
        if (isEmpty === false && coin.short_name === selectItem.short_name) {
            
            let listCoins_map = [...listCoins];

            let objIndex = listCoins.findIndex((obj => obj.short_name === coin.short_name));

            listCoins_map[objIndex].name = selectItem.name;

            if (listCoins_map[objIndex].name.length > 0) {
                this.setState({
                    listCoins: listCoins_map,
                    selectItem: {}
                })
                toast.success("Lưu Thành Công!");
            } else {
                toast.warn("Vui lòng nhập tên!");
            }
            return;
            
        }
        
        this.setState({
            selectItem: coin
        })
    }

    handleEditSelectItem = (event) => {
        let map = {...this.state.selectItem};
        map.name = event.target.value;
        this.setState({
            selectItem: map
        })
    }

    render() {

        let { listCoins, selectItem } = this.state;
        //let listCoins = this.state.listCoins
        let isEmpty = Object.keys(selectItem).length === 0;

        return (
            <>
                <div className="container">
                    <div className="section">
                        <AddCoins 
                            addCoin={this.addCoin}
                        />
                        <div className="read_block">
                            <ul>
                                {
                                    listCoins && listCoins.length > 0 &&
                                    listCoins.map((item, index) => {
                                        return(
                                            <li key={item.name}>
                                                { isEmpty === true ?
                                                    <span className="title">{index + 1} - {item.name} ({item.short_name}) - {item.price}</span>
                                                    : 
                                                    <>
                                                        {
                                                            selectItem.short_name === item.short_name ?
                                                            <span className="title">{index + 1} - 
                                                                <input className="submit_in" type="text" value={selectItem.name} 
                                                                    onChange={(event)=> this.handleEditSelectItem(event)}
                                                                /> ({item.short_name}) - {item.price}</span>
                                                            :
                                                            <span className="title">{index + 1} - 
                                                                {item.name} ({item.short_name}) - {item.price}</span>
                                                        }
                                                    </>
                                                    
                                                }
                                            
                                                <button type="submit" className="btn"
                                                    onClick={() => {this.editCoin(item)}}
                                                >
                                                    <span>
                                                        { isEmpty === false && selectItem.short_name === item.short_name ? 
                                                            'Save': 'Edit'
                                                        }
                                                    </span>
                                                </button>
                                                <button type="submit" className="btn"
                                                    onClick={() => this.delCoin(item)}
                                                ><span>Delete</span></button>
                                            </li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default ListTodo;
import React, { Component } from 'react'
import Coin from './Coin';

class DisplayTable extends Component {
    constructor(props) {
        super(props)
        this.state = { coins: []}
    }

    componentDidMount() {
        setInterval(() => {
            fetch('https://api.coinmarketcap.com/v2/ticker/?limit=100')
                .then(response => {
                    return response.json()
                })
                .then(myJson => {
                    this.setState({ coins: myJson.data})
                })
        }, 10000)
    }
    render() { 
        let coins = Object.keys(this.state.coins).map(id => {
            let coin = this.state.coins[id]
            return <Coin
                key = {coin.id}
                name = {coin.name}
                symbol = {coin.symbol}
                price = {coin.quotes.USD.price}
                lastTwentyFour = {coin.quotes.USD.percent_change_24h}
            />
        }
    )
        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan="4">Crypto Stats</th>
                    </tr>
                    <tr className="categories">
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Price</td>
                        <td>24hr % Change</td>
                    </tr>
                </thead>
                <tbody>
                    {coins}
                </tbody>
            </table>
        )
    }
}
 
export default DisplayTable
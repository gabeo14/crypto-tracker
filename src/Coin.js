import React, { Component } from 'react'

class Coin extends Component {
    render() { 
        return ( 
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.symbol}</td>
                <td>${this.props.price}</td>
                <td>{this.props.lastTwentyFour}%</td>
            </tr>
         )
    }
}
 
export default Coin
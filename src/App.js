import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import DisplayTable from './DisplayTable'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <DisplayTable />
      </div>
    )
  }
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'

import Product from '../components/Product'
import data from "../data"

class App extends React.Component () {
  render(){
    return (
      <div>
        <Product info={data} handleClick={this.handleClick}/>
      </div>
    )
  }
  
}

ReactDOM.render(<App/>, document.querySelector('#root'))
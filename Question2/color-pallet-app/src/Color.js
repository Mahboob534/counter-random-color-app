import React, { Component } from 'react'

export default class Color extends Component {
  render() {
    return (
      <div>
        <li ><div style={{background:`${this.props.displayColor}`}}></div> {this.props.displayColor} </li>
      </div>
    )
  }
}

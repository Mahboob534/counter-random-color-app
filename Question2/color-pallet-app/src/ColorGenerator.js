import React, { Component } from 'react'
import Color from './Color';
export default class ColorGenerator extends Component {
    constructor(){
       super()
        this.state={
            colors:[]
        }
    }
    addColor=()=>{
      let randomNumber = (Math.random() * 0xfffff * 1000000).toString(16);
      console.log(randomNumber)
      //let b = '#' + n.slice(0, 6);
      this.setState({colors:[...this.state.colors,'#' + randomNumber.slice(0, 6)]})
          }
  render() {
   // console.log(this.state.colors)
    return (
      <>
          <button onClick={this.addColor}>Add Number</button>
          <ul >
            {this.state.colors.map(index=> <Color displayColor={index}/> )}
          </ul>
      </>
    )
  }
}


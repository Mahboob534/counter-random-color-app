import React, { Component } from 'react'
import Button from './Button';
export default class Counter extends Component {
    constructor() {
        super();
        this.state={
            count: 0
        }
        

    }
    increase=()=>{
        this.setState({count:this.state.count+1})
    }
    decrease=()=>{
      this.setState({count:this.state.count-1})
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <Button title="+" handelClick={this.increase}/>
                <Button title="-" handelClick={this.decrease}/>
            </div>
        )
    }
}

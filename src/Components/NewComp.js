import React, { Component } from 'react'

export class NewComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to my channel and follow me on SimpliLearn",
         sub:"Subscribe here"
      }
    }

    styles ={
        fontstyle: "italic",
        color: "purple"
      };

      ButtonChange=() => {
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed"
        })
      }

  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}> {this.state.message} </h3>
        <button onClick={this.ButtonChange}> {this.state.sub} </button>

      </div>
    )
  }
}

export default NewComp;
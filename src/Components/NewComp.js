import React, { Component } from 'react';
import bellA from "./bellA.png";
import bellC from "./bellC.png";


export class NewComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to my channel and follow me on SimpliLearn",
         sub:"Subscribe here",
         imageURL: bellA
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
        });
      };
      
imageChange=()=> {
  this.setState({
    imageURL: bellC,
    message: "Thank you, happy learning"
  })
}


  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}> {this.state.message} </h3>
        <button onClick={this.ButtonChange}> {this.state.sub} </button>
        <p></p>
        <img 
          style={ {width:"30px" , height: "30px"} } 
          src={this.state.imageURL} 
          onClick={this.imageChange}
          alt="" 
        />

      </div>
    )
  }
}

export default NewComp;
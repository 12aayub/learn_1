import React, { Component } from 'react';


class GoodRobot extends Component {
  handleChange(e){
    this.props.updateGreeting(e.target.value)
  }

  render() {
    return (
       <div>
        <p>I hear you saying {this.props.greeting}. Is that correct?</p>
       </div>
    );
  }
}

export default GoodRobot;

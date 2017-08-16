import React, { Component } from 'react';


class KanyeBot extends Component {
  handleChange(e){
    this.props.updateGreeting(e.target.value)
  }

  render() {
    return (
      <div>
       <p>I'm gonna let you finish but Beyonce is {this.props.greeting}</p>
      </div>
    );
  }
}

export default KanyeBot;

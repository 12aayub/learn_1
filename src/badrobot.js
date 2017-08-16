import React, { Component } from 'react';


class BadRobot extends Component {

  constructor() {
    super()
    this.state = {
        message: 'BLABLABLABLABLABLABLABLABLABLABLA'
    }
  }

    // get this.props.greeting

    //find greeting length

    //take greeting length and get substring of blblblbl message

    // display substring of blabalba
  render() {
    let blaMessage = this.state.message.substring(0, this.props.greeting.length)
    return (
      <p>I hear you saying {blaMessage}. Is that correct?</p>
    );
  }
}

export default BadRobot;

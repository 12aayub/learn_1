import React, { Component } from 'react';
import GreetingInput from './GreetingInput.js';
import GoodRobot from './goodrobot.js';
import BadRobot from './badrobot.js';
import KanyeBot from './kanyebot.js';
import Header from './header.js';
import UserDataForm from './dummyform.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      greeting: 'Bob',
    }
  }
  updateGreeting(greeting) {
    this.setState({greeting: greeting})
  }

  render() {
    return (
      <div>
        <div>
          <Header greeting={this.state.greeting} />
        </div>
        <div>
          <GreetingInput greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)} />
        </div>
        <div>
          <GoodRobot greeting={this.state.greeting} />
        </div>
        <div>
          <BadRobot greeting={this.state.greeting} />
        </div>
        <div>
          <KanyeBot greeting={this.state.greeting} />
        </div>
        <div>
          <UserDataForm />
        </div>
      </div>
    );
  }
}

export default App;

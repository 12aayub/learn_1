import React, { Component } from 'react'

class UserDataForm extends Component {
  constructor(props){
    super(props)
    this.state = props.userData
  }
  submitForm(event){
  //   //Do what we need to with the results of the form
    this.props.onSubmit(this.state)
    event.preventDefault()
 }

  handleChange(event) {
    const target = event.target
    const attribute = target.name
    var capitalizedInput = event.target.value.toUpperCase()
    this.setState({[attribute]: capitalizedInput})
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    console.log(this.state)
    // var input = this.props.firstName
    // var input.toUpperCase()
  }



  render() {
    return (
        <form onSubmit={this.submitForm.bind(this)} >
          <div>
            <label>First Name:</label>
              <input
                type='text'
                name='firstName'
                value={this.props.firstName}
                onChange={this.handleChange.bind(this)} />
                <br />
            <label>Last Name:</label>
              <input
                type='text'
                name='lastName'
                value={this.props.lastName}
                onChange={this.handleChange.bind(this)} />
                <br />
                <label>Email:</label>
                <input
                  type='text'
                  name='email'
                  value={this.props.email}
                  onChange={this.handleChange.bind(this)} />
                  <br />
              <input type='submit' value='Submit' />
          </div>
        </form>
    );
  }
}

export default UserDataForm;

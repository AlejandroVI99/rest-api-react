import React, { Component } from 'react';
import axios from 'axios'

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirmation: "",
      registrationError: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { //update states
    console.log("handle changes", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) { //handle the api endpoint
    const {
      email,
      password
    } = this.state;

    axios.post("http://127.0.0.1:3000/signup",{
      user: {
        email: email,
        password: password
      }
    }, { withCredentials: true } //withCredentials: true VERY IMPORTANT BECAUSE IT SET THE COOKIE
    ).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.handleChange} required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={this.state.password} onChange={this.handleChange} required />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

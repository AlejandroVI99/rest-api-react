import { useFetch } from "./useFetch.js";
import { LoginForm } from "./LoginForm.jsx";
import { Registration } from "./Registration.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';



export default class App extends React.Component {
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

  render() {
    return (
      <>
      <Router>
        <Routes>
          <Route path="/signup" Component={Registration} />
        </Routes>
      </Router>
      </>
    );
  }
}

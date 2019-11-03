import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from './../components/AuthService';
import API from './../utils/API';

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    formValues: {
      usertype:"",
      username:"",
      email: "",
      password: ""
    },
    usertype: "",
    error: null
  };


  handleFormSubmit = event => {
    event.preventDefault();
    const { usertype, username, email, password } = this.state.formValues;
    API.signUpUser(usertype, username, email, password)
      .then(res => {
        // once the user has signed up, set this.state.usertype from response
        let usertype = res.data.usertype;
        this.setState({
          error: null,
          usertype: usertype
        });
      })
      .catch(err => { 
        this.setState({ error: err });
        alert(err); });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    });
  };

  render() {
    // if this.state.usertype has value, it means use has signed up, then redirect user to login page
     if (this.state.usertype) {
        return <Redirect to="/login" /> 
      }

    return (
      <div className="container">

        <h1>Signup</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect">User Type</label>
            </div>
            <select className="custom-select" id="inputGroupSelect" name="usertype" onChange={this.handleChange}>
            <option>Choose...</option>
              <option value="owner">Pet Owner</option>
              <option value="vet">Veterinary</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input className="form-control"
              placeholder="Username goes here..."
              name="username"
              type="text"
              id="username"
              autoComplete="username"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input className="form-control"
              placeholder="Email goes here..."
              name="email"
              type="email"
              id="email"
              autoComplete="email"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input className="form-control"
              placeholder="Password goes here..."
              name="password"
              type="password"
              id="pwd"
              autoComplete="new-password"
              onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {/* <p><Link to="/login">Go to Login</Link></p> */}
      </div>
    );
  }
}

export default Signup;
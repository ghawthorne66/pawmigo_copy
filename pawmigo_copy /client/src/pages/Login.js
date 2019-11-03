import React, { Component } from 'react';
import AuthService from './../components/AuthService';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    formValues: {
      email: "",
      password: ""
    },
    usertype: "",
    error: null
  };


  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state.formValues
    this.Auth.login(email, password)
      .then(res => {
        // once user is logged in
        // get user type and set the state which will re-render, so in render() method below, we can redirect user to their corresponding dashboard page
        let usertype = res.data.user.usertype;
        this.setState({
          error: null,
          usertype: usertype
        });
      })
      .catch(err => {
        this.setState({ error: err.response.data.message });
        alert(err.response.data.message);
      });
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
    // go to corresponding user dashboard page based on user type
    if (this.state.usertype === "owner") {
      return <Redirect to="/ownerdashboard" />
    }
    if (this.state.usertype === "vet") {
      return <Redirect to="/vetdashboard" />
    }

    // if there is no value in this.state.usertype, it means the user is NOT logged in, then just show the login form
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input className="form-control"
              value={this.state.formValues.email}
              placeholder="Email goes here..."
              name="email"
              type="email"
              id="email"
              autoComplete="email"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input className="form-control"
              value={this.state.formValues.password}
              placeholder="Password goes here..."
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {/* <p><Link to="/signup">Go to Signup</Link></p> */}
      </div>
    );
  }
}

export default Login;
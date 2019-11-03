import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import Reviews from '../components/Reviews/Reviews';

class VetDashboard extends Component {

  render() {
    return (
      <div className="App">
      <div className="App-header">
        <h2>Welcome {this.props.user.email}</h2>
      </div>
      <h3>This is Veterinary Dashboard page.</h3>
      <div><Reviews /></div>
    </div>
    );
  }
}

export default withAuth(VetDashboard);

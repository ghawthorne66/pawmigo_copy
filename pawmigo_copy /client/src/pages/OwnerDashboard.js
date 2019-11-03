import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';
import Calendar from '../components/Calendar/Calendar';
import API from '../utils/API';
import PetProfile from "../components/PetProfile";


class OwnerDashboard extends Component {

  state = {
    petAdded: true
  }

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      if (res.data.pets.length === 0) {
        this.setState({
          petAdded: false
        })
      }
    });
  }

  render() {
    return (

      <div className="App">
        <div className="App-header">
          {/* <h2>Welcome {this.props.user.email}</h2> */}
        </div>
        <h3>This is Pet Owner Dashboard page.</h3>
        <button type="button" className="btn btn-info" onClick={() => this.props.history.replace('/addpet')}>Add Pet</button>
        <p><Link to="/addpet" className="btn btn-info">Add Pet</Link></p>
        <div><Calendar /></div>//Render Calendar//
      </div>

    );
  }
}


export default withAuth(OwnerDashboard);

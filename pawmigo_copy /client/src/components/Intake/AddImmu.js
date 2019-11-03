import React, { Component } from "react";
import withAuth from '../withAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';

class AddImmu extends Component {
    state = {
        immunization: "",
        date: "",
        immuAdded: false
    };


    handleFormSubmit = event => {
        event.preventDefault();

        var petID = "5dbe83926f88841a8c7f3a90";

        const newImmu = {
            immunization: this.state.immunization,
            receivedAt: this.state.date
        }

        API.saveImmunization(petID, newImmu)
            .then(res => {
                this.setState({ immuAdded: true });
            })
            .catch(err => alert(err));
    };


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleDateChange = date => {
        this.setState({
            date: date
        });
    };


    render() {

        if (this.state.immuAdded) {
            return <Redirect to="/" />
        }

        return (
            <div className="container">

                <h1>Add Immunization:</h1>

                <form onSubmit={this.handleFormSubmit}>

                <div className="form-group">
                        <label htmlFor="immu">Name:</label>
                        <input className="form-control"
                            name="immunization"
                            type="text"
                            id="immu"
                            onChange={this.handleChange} />
                    </div>

                    <br />

                    <div className="form-group">
                        <label>Received Date:</label>
                        <br />
                        <DatePicker selected={this.state.date} onChange={this.handleDateChange} />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        );
    }
}



export default withAuth(AddImmu);
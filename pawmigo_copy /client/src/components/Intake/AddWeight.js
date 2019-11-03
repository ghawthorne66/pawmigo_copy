import React, { Component } from "react";
import withAuth from '../withAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';

class AddWeight extends Component {
    state = {
        weight: "",
        date: "",
        weightAdded: false
    };


    handleFormSubmit = event => {
        event.preventDefault();

        var petID = "5dbe83926f88841a8c7f3a90";

        const newWeight = {
            weight: this.state.weight,
            dateTaken: this.state.date
        }

        API.saveWeight(petID, newWeight)
            .then(res => {
                this.setState({ weightAdded: true });
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

        if (this.state.weightAdded) {
            return <Redirect to="/" />
        }

        return (
            <div className="container">

                <h1>Add Weight:</h1>

                <form onSubmit={this.handleFormSubmit}>

                <div className="form-group">
                        <label htmlFor="weight">Weight (lbs):</label>
                        <input className="form-control"
                            name="weight"
                            type="text"
                            id="weight"
                            onChange={this.handleChange} />
                    </div>
                    <br />

                    <div className="form-group">
                        <label>Taken Date</label>
                        <br />
                        <DatePicker selected={this.state.date} onChange={this.handleDateChange} />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        );
    }
}



export default withAuth(AddWeight);
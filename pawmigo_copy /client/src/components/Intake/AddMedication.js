import React, { Component } from "react";
import withAuth from '../withAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';

class AddMedication extends Component {
    state = {
        medication: "",
        directions: "",
        date: "",
        medicationAdded: false
    };


    handleFormSubmit = event => {
        event.preventDefault();

        var petID = "5dbe83926f88841a8c7f3a90";

        const newMedication = {
            medication: this.state.medication,
            directions: this.state.directions,
            date: this.state.date
        }

        API.saveMedication(petID, newMedication)
            .then(res => {
                this.setState({ medicationAdded: true });
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

        if (this.state.medicationAdded) {
            return <Redirect to="/" />
        }

        return (
            <div className="container">

                <h1>Add Medication:</h1>

                <form onSubmit={this.handleFormSubmit}>

                <div className="form-group">
                        <label htmlFor="medication">Medication Name:</label>
                        <input className="form-control"
                            name="medication"
                            type="text"
                            id="medication"
                            onChange={this.handleChange} />
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Taking Directions:</span>
                        </div>
                        <textarea className="form-control" name="directions" onChange={this.handleChange}></textarea>
                    </div>

                    <br />

                    <div className="form-group">
                        <label>Prescriped Date:</label>
                        <br />
                        <DatePicker selected={this.state.date} onChange={this.handleDateChange} />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        );
    }
}



export default withAuth(AddMedication);
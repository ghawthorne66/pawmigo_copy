import React, { Component } from "react";
import withAuth from '../withAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';

class AddCondition extends Component {
    state = {
        condition: "",
        date: "",
        conditionAdded: false
    };


    handleFormSubmit = event => {
        event.preventDefault();

        var petID = "5dbe83926f88841a8c7f3a90";

        const newCondition = {
            condition: this.state.condition,
            date: this.state.date
        }

        API.saveCondition(petID, newCondition)
            .then(res => {
                this.setState({ conditionAdded: true });
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

        if (this.state.conditionAdded) {
            return <Redirect to="/" />
        }

        return (
            <div className="container">

                <h1>Add Condition:</h1>

                <form onSubmit={this.handleFormSubmit}>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Description:</span>
                        </div>
                        <textarea className="form-control" name="condition" onChange={this.handleChange}></textarea>
                    </div>

                    <br />

                    <div className="form-group">
                        <label>Date of Condition:</label>
                        <br />
                        <DatePicker selected={this.state.date} onChange={this.handleDateChange} />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        );
    }
}



export default withAuth(AddCondition);
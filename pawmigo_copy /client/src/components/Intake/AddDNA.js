import React, { Component } from "react";
import withAuth from '../withAuth';
import "react-datepicker/dist/react-datepicker.css";
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';

class AddDNA extends Component {
    state = {
        breed: "",
        eic: "",
        dm: "",
        dnaAdded: false
    };


    handleFormSubmit = event => {
        event.preventDefault();

        var petID = "5dbe83926f88841a8c7f3a90";

        const newDNA = {
            breedComposition: this.state.breed,
            exerciseInducedCollapse: this.state.eic,
            DegenerativeMyelopathy: this.state.dm,
        }

        API.saveDNA(petID, newDNA)
            .then(res => {
                this.setState({ dnaAdded: true });
            })
            .catch(err => alert(err));
    };


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };



    render() {

        if (this.state.dnaAdded) {
            return <Redirect to="/" />
        }

        return (
            <div className="container">

                <h1>Add DNA Test Results:</h1>

                <form onSubmit={this.handleFormSubmit}>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Breed Composition:</span>
                        </div>
                        <textarea className="form-control" name="breed" onChange={this.handleChange}></textarea>
                    </div>

                    <br />

                    <div className="form-group">
                        <label htmlFor="eic">Exercise Induced Collapse:</label>
                        <input className="form-control"
                            name="eic"
                            type="text"
                            id="eic"
                            onChange={this.handleChange} />
                    </div>

                    <br />

                    <div className="form-group">
                        <label htmlFor="dm">Degenerative Myelopathy:</label>
                        <input className="form-control"
                            name="dm"
                            type="text"
                            id="dm"
                            onChange={this.handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        );
    }
}



export default withAuth(AddDNA);
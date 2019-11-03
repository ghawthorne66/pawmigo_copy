import React, { Component } from "react";
import withAuth from '../withAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from '../PetImage/Loading';
import Image from '../PetImage/Image';
import AddButton from '../PetImage/AddButton';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';

class AddPet extends Component {
    state = {
        name: "",
        gender: "",
        breed: "",
        dateOfBirth: "",
        uploading: false,
        images: [],
        imageURL: "",
        petAdded: false
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const userID = this.props.user.id;
        const newPet = {
            name: this.state.name,
            gender: this.state.gender,
            breed: this.state.breed,
            dateOfBirth: this.state.dateOfBirth,
            imageURL: this.state.imageURL
        }
        API.savePet(userID, newPet)
            .then(res => {
                this.setState({ petAdded: true });
                //this.props.history.replace('/ownerdashboard');
                //this.props.router.push('/ownerdashboard');

            })
            .catch(err => alert(err));
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleDOBChange = date => {
        this.setState({
            dateOfBirth: date
        });
    };

    onChange = e => {
        const files = Array.from(e.target.files)
        this.setState({ uploading: true })

        const formData = new FormData()

        files.forEach((file, i) => {
            formData.append(i, file)
        })

        fetch("/image-upload", {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(images => {
                //console.log(images);
                this.setState({
                    uploading: false,
                    imageURL: images[0].secure_url,
                    images
                })
            })
    }


    removeImage = id => {
        this.setState({
            images: this.state.images.filter(image => image.public_id !== id)
        })
    }

    render() {

        if (this.state.petAdded) {
            return <Redirect to="/ownerdashboard" />
        }

        const { uploading, images } = this.state

        const content = () => {
            switch (true) {
                case uploading:
                    return <Loading />
                case images.length > 0:
                    return <Image images={images} removeImage={this.removeImage} />
                default:
                    return <AddButton onChange={this.onChange} />
            }
        }

        return (
            <div className="container">

                <h1>Pet Information</h1>

                <form onSubmit={this.handleFormSubmit}>

                    <div className="form-group">
                        <label htmlFor="petname">Pet Name:</label>
                        <input className="form-control"
                            name="name"
                            type="text"
                            id="petname"
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Date of Birth:</label>
                        <br />
                        <DatePicker selected={this.state.dateOfBirth} onChange={this.handleDOBChange} />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="gender">Gender:</label>
                        </div>
                        <select className="custom-select" id="gender" name="gender" onChange={this.handleChange}>
                            <option>Choose...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="breed">Breed:</label>
                        </div>
                        <select className="custom-select" id="breed" name="breed" onChange={this.handleChange}>
                            <option>Choose...</option>
                            <option value="husky">Husky</option>
                            <option value="bichon shitzu">Bichon Shitzu</option>
                            <option value="golden retriever">Golden Retriever</option>
                        </select>
                    </div>

                    <div>
                        <div className='buttons'>
                            {content()}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        );
    }
}



export default withAuth(AddPet);
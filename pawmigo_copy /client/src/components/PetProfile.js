import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from "./withAuth";

class PetProfile extends Component {

    render() {
        return (
            <div className="container mt-5">

                <div className="card">
                    <h1 className="card-header">Pet Name</h1>
                    <div className="card-body">

                        {/* row 1 */}
                        <div className="row">
                            {/* pet info */}
                            <div className="col-sm-8">
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbxyBpSpUrl2ZECzy-epybU8ay0KV5X-GRa3aQBliXTQL7Fel8" alt="pet iamge"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <p className="card-text">Age: 5</p>
                                                <p className="card-text">Gender: Female</p>
                                                <p className="card-text">Breed: Pug</p>
                                                <p className="card-text">Date Of Birth: 01/01/2014</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* pet related buttons */}
                            <div className="col-sm-4">
                                <p><Link to="/bookappointment" className="btn btn-info">Book Appointment</Link></p>
                            </div>
                        </div>


                        <div className="row mt-5"></div>

                        {/* row 2 */}
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <h4 className="card-header">Health Conditions</h4>
                                    <div className="card-body">
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <h4 className="card-header">Weight</h4>
                                    <div className="card-body">
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5"></div>

                        {/* row 3 */}
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <h4 className="card-header">Immunizations</h4>
                                    <div className="card-body">
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <h4 className="card-header">Medications</h4>
                                    <div className="card-body">
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5"></div>

                        {/* row 4 */}
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <h4 className="card-header">DNA Test Result</h4>
                                    <div className="card-body">
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        );
    }
}

export default withAuth(PetProfile);

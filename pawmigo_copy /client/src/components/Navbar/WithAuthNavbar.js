import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import withAuth from '../withAuth';
import API from '../../utils/API';

class WithAuthNavbar extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    state = {
        usertype: "",
    };

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                usertype: res.data.usertype,
            })
        });
    }

    showNavigation = () => {
       
        if (this.state.usertype === "owner") {
                    return (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/ownerdashboard">Pet Owner Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                            </li>
                        </ul>
                    );
                } else if (this.state.usertype === "vet") {
                    return (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/vetdashboard">Vet Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                {/* this is not using the Link component to logout user and then refresh the application to the start */}
                                <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                            </li>
                        </ul>
                    );
                }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">PawMigo</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        {this.showNavigation()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default withAuth(WithAuthNavbar);
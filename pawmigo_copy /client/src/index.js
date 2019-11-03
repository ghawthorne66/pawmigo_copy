import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OwnerDashboard from './pages/OwnerDashboard';
import VetDashboard from './pages/VetDashboard';
import AboutUs from './pages/AboutUs';
import Calendar from './components/Calendar';
import Reviews from './components/Reviews';
import AddPet from './components/Intake/AddPet';
import WithAuthNavbar from './components/Navbar/WithAuthNavbar';
import Welcome from './components/Welcome';
import { createBrowserHistory } from "history";

import AddCondition from "./components/Intake/AddCondition";
import AddMedication from "./components/Intake/AddMedication";
import AddImmunization from "./components/Intake/AddImmu";
import AddDNA from "./components/Intake/AddDNA";
import AddWeight from "./components/Intake/AddWeight";

const customHistory = createBrowserHistory();

// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
    // then we will attach it to the headers of each request from react application via axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}



ReactDOM.render(

    <Router>
        <div>
            <Route exact path="/"><Navbar /><App /></Route>
            <Route exact path="/login"><Navbar /><Login /></Route>
            <Route exact path="/signup"><Navbar /><Signup /></Route>
            <Route exact path="/aboutus"><Navbar /><AboutUs /></Route>

            <Route exact path="/ownerdashboard"><WithAuthNavbar /><OwnerDashboard /></Route>
            <Route exact path="/vetdashboard"><WithAuthNavbar /><VetDashboard /></Route>
            <Route exact path="/calendar"><WithAuthNavbar /><Calendar /></Route>
            <Route exact path="/reviews"><WithAuthNavbar /><Reviews /></Route>
            <Route exact path="/addpet"><WithAuthNavbar /><AddPet /> </Route>
            <Route exact path="/welcome"><WithAuthNavbar /><Welcome /> </Route>
            <Route exact path="/addcondition"><WithAuthNavbar /><AddCondition /> </Route>
            <Route exact path="/addmedication"><WithAuthNavbar /><AddMedication /> </Route>
            <Route exact path="/addimmu"><WithAuthNavbar /><AddImmunization /> </Route>

            <Route exact path="/adddna"><WithAuthNavbar /><AddDNA /> </Route>
            <Route exact path="/addweight"><WithAuthNavbar /><AddWeight /> </Route>
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();


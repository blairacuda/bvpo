import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js'
import Events from './Events.js'
import Contact from './Contact.js'
import AmityInterns from './AmityInterns.js';

function Navigation() {
    return (
        <div>
            <Navbar expand="lg">
                <Link to="/">
                    <img
                        alt=""
                        src="Jaguar.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                            <NavDropdown title="What We Fund" id="basic-nav-dropdown">
                                <Link className="dropdown-item" to="/amityinterns">Amity Interns</Link>
                                <Link className="dropdown-item" to="/fooddrives">Food Drives</Link>
                                <Link className="dropdown-item" to="/staffappreciation">Staff Appreciation</Link>
                            </NavDropdown>
                            <NavDropdown title="Fundraisers" id="basic-nav-dropdown">
                                <Link className="dropdown-item" to="/subasta">Subasta</Link>
                                <Link className="dropdown-item" to="/jogathon">Job-A-Thon</Link>
                                <Link className="dropdown-item" to="/bookfair">Book Fair</Link>
                                <Link className="dropdown-item" to="/pizza">Papa's Pizza Coupons</Link>
                                <Link className="dropdown-item" to="/boxtops">Box Tops</Link>
                                <Link className="dropdown-item" to="/coindrive">Coin Drive</Link>
                            </NavDropdown>
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <Link className="dropdown-item" to="/board">Board</Link>
                                <Link className="dropdown-item" to="/minutes">Minutes</Link>
                                <Link className="dropdown-item" to="/bylaws">Bylaws</Link>
                            </NavDropdown>
                        <Link className="navbar-light navbar-nav nav-link" to="/events">Events</Link>
                        <Link className="navbar-light navbar-nav nav-link" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/amityinterns' component={AmityInterns}/>
                <Route path='/events' component={Events}/>
                <Route path='/contactus' component={Contact}/>
            </Switch>
        </div>
    )}

export default Navigation;
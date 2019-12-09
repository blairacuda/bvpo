import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js'
import Events from './Events.js'
import Contact from './Contact.js'
import AmityInterns from './AmityInterns.js';

function Navigation() {
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="Jaguar.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                            <NavDropdown title="What We Fund" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/amityinterns">Amity Interns</NavDropdown.Item>
                                <NavDropdown.Item href="/fooddrives">Food Drives</NavDropdown.Item>
                                <NavDropdown.Item href="/staffappreciation">Staff Appreciation</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Fundraisers" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/subasta">Subasta</NavDropdown.Item>
                                <NavDropdown.Item href="/jogathon">Job-A-Thon</NavDropdown.Item>
                                <NavDropdown.Item href="/bookfair">Book Fair</NavDropdown.Item>
                                <NavDropdown.Item href="/pizza">Papa's Pizza Coupons</NavDropdown.Item>
                                <NavDropdown.Item href="/boxtops">Box Tops</NavDropdown.Item>
                                <NavDropdown.Item href="/coindrive">Coin Drive</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/board">Board</NavDropdown.Item>
                                <NavDropdown.Item href="/minutes">Minutes</NavDropdown.Item>
                                <NavDropdown.Item href="/bylaws">Bylaws</NavDropdown.Item>
                            </NavDropdown>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
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
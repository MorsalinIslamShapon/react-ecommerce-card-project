import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/logo.svg"
import {NavLink} from "react-router-dom";
import {GetToken, RemoveToken} from "../utility/TokenHelper.js";


const AppNavBar = () => {

    const [login,SetLogin]=useState(false);

    useEffect(() => {
        if(GetToken()){
            SetLogin(true)
        }
        else {
            SetLogin(false)
        }
    }, []);

    return (
        <Navbar expand="lg" className="sticky-top">
            <Container fluid>
                <Navbar.Brand>
                        <img src={logo} className="nav-logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavLink className="nav-link"  to="/">Products</NavLink>
                        {login?(<NavLink className="nav-link"  to="/cart">Carts</NavLink>):(<></>)}
                    </Nav>

                    {login?(<button onClick={()=>{RemoveToken()}} className="btn btn-danger">Logout</button>):( <NavLink className="btn btn-success"  to="/login">Login</NavLink>)}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavBar;
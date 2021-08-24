import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import '../Styles/NavbarLanding.css';

import waysbucks from '../assets/logos/waysbucks.png';
import profpic from '../assets/avatar/profpic.png';
import shopbasket from '../assets/logos/shopping-basket.svg';
import DropdownUser from "./DropdownUser";


import React from 'react';


export default function NavbarUser(props) {

    const history = useHistory();


    const toHomePage = () => {
        history.push('/Home')
    }

    
    return (
        <Navbar className="navbarLanding">
                    <Navbar.Brand onClick={toHomePage} className="waysbucks">
                        <img 
                            src={waysbucks} 
                            alt="waysbucks" 
                        />
                    </Navbar.Brand>
                    <NavbarLogged />
            </Navbar>
    );
}

function NavbarLogged(){

    const history = useHistory();

    const toCart = () => {
        history.push('/Cart')
    }
    return(
        <Navbar.Collapse className="navbarProfile">
            <Nav className="navProf">
                <img onClick={toCart} className="shopBasket" src={shopbasket} />
                <Dropdown style={{marginTop: '25px'}} > 
                    <Dropdown.Toggle>
                        <div className="profpic">
                            <img src={profpic} />
                        </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <DropdownUser />
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Navbar.Collapse>

    )
}
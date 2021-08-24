import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

import '../Styles/NavbarLanding.css';

import waysbucks from '../assets/logos/waysbucks.png';
import profpic from '../assets/avatar/profpic.png';
import shopbasket from '../assets/logos/shopping-basket.svg';
import DropdownUser from "./DropdownUser";

export default function NavbarWaysBucks() {
     // login
    const [isClickLogin, setClickLogin] = useState(false);
    const handleClickLogin = () => setClickLogin(!isClickLogin);

     // registerasi
    const [isClickRegister, setClickRegister] = useState(false);
    const handleClickRegister = () => setClickRegister(!isClickRegister);
    return (
        <>
            <Navbar className="navbarLanding">
                    <Navbar.Brand className="waysbucks">
                        <img 
                            src={waysbucks} 
                            alt="waysbucks" 
                        />
                    </Navbar.Brand>
                    <NavbarNotLogged handleClickLogin={handleClickLogin} handleClickRegister={handleClickRegister} />
            </Navbar>
            {isClickLogin ? <Login isOpen={isClickLogin} /> : null}
            {isClickRegister ? <Register isOpen={isClickRegister} /> : null}
        </>
    );
}

function NavbarNotLogged(props) {
    return (
        <Navbar.Collapse className="navbarBtn">
            <Nav>
                <button onClick={props.handleClickLogin} className="navbarLogin">Login</button>
                <button onClick={props.handleClickRegister} className="navbarRegister">Register</button>
            </Nav>
        </Navbar.Collapse>
    )
}
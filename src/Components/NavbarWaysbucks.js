import { Nav, Navbar } from "react-bootstrap";

import '../Styles/NavbarLanding.css';

import waysbucks from '../assets/logos/waysbucks.png';
import profpic from '../assets/avatar/profpic.png';
import shopbasket from '../assets/logos/shopping-basket.svg';

export default function NavbarWaysBucks() {
    return (
            <Navbar className="navbarLanding">
                    <Navbar.Brand className="waysbucks">
                        <img 
                            src={waysbucks} 
                            alt="waysbucks" 
                        />
                    </Navbar.Brand>
                    {/* <NavbarNotLogged /> */}
                    <NavbarLogged />
            </Navbar>
    );
}

function NavbarNotLogged() {
    return (
        <Navbar.Collapse className="navbarBtn">
            <Nav>
                <button className="navbarLogin">Login</button>
                <button className="navbarRegister">Register</button>
            </Nav>
        </Navbar.Collapse>
    )
}

function NavbarLogged(){
    return(
        <Navbar.Collapse className="navbarProfile">
            <Nav className="navProf">
                <img className="shopBasket" src={shopbasket} />
                <div className="profpic">
                    <img src={profpic} />
                </div>
            </Nav>
        </Navbar.Collapse>

    )
}
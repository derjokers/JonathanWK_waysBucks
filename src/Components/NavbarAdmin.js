import { Nav, Navbar } from "react-bootstrap";

import waysbucks from '../assets/logos/waysbucks.png';
import profpic from '../assets/avatar/profpic.png';

import '../Styles/NavbarLanding.css';

export default function NavbarAdmin() {
    return (
        <Navbar className="navbarLanding">
                <Navbar.Brand className="waysbucks">
                    <img 
                        src={waysbucks} 
                        alt="waysbucks" 
                    />
                </Navbar.Brand>
                <AdminProfile />
        </Navbar>
    );
}

function AdminProfile() {
    return (
        <Navbar.Collapse className="navbarProfile">
            <Nav className="navProf">
                <div className="profpic">
                    <img src={profpic} />
                </div>
            </Nav>
        </Navbar.Collapse>
    )
}
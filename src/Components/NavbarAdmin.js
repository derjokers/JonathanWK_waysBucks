import { useHistory } from "react-router-dom";

import { Dropdown, Nav, Navbar } from "react-bootstrap";
import DropdownAdmin from "./DropdownAdmin";

import waysbucks from '../assets/logos/waysbucks.png';
import profpic from '../assets/avatar/profpic.png';

import '../Styles/NavbarLanding.css';

export default function NavbarAdmin() {
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
                <AdminProfile />
        </Navbar>
    );
}

function AdminProfile() {
    return (
        <Navbar.Collapse className="navbarProfile">
            <Dropdown style={{marginTop: '25px'}} >
                <Dropdown.Toggle>
                    <Nav className="navProf">
                        <div className="profpic">
                            <img src={profpic} alt="profile pic" />
                        </div>
                    </Nav>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <DropdownAdmin/>
                </Dropdown.Menu>
            </Dropdown> 
        </Navbar.Collapse>
    )
}
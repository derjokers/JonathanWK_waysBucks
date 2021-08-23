import profileLogo from '../assets/logos/profileLogo.png'
import logoutLogo from '../assets/logos/logoutLogo.png'

import '../Styles/DropdownUser.css';

export default function DropdownUser(props) {
    return (
        <div className="dropdownUser" >
            <div className="profileLogout">
                <div className="profileLogo">
                    <img src={profileLogo} />
                    <p>Profile</p>
                </div>
                <hr />
                <div className="logoutLogo">
                    <img src={logoutLogo} />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    );
}
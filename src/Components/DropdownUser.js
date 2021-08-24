import profileLogo from '../assets/logos/profileLogo.png'
import logoutLogo from '../assets/logos/logoutLogo.png'

import '../Styles/DropdownUser.css';
import { useHistory } from 'react-router-dom';

export default function DropdownUser(props) {
    const history = useHistory();

    const toProfile = () => {
        history.push('/Profile')
    }
    const logout = () => {
        history.push('/')
    }
    return (
        <div className="dropdownUser" >
            <div className="profileLogout">
                <div onClick={toProfile} className="profileLogo">
                    <img src={profileLogo} />
                    <p>Profile</p>
                </div>
                <hr />
                <div onClick={logout} className="logoutLogo">
                    <img src={logoutLogo} />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    );
}
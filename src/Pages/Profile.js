import MyProfile from "../Components/MyProfile";
import NavbarWaysBucks from "../Components/NavbarWaysbucks";
import Transaction from "../Components/Transaction";

import '../Styles/Profile.css'

export default function Profile() {
    return (
        <div>
            <NavbarWaysBucks />
            <div className="profilePage">
                <MyProfile />
                <div className="myTransaction">
                    <h1>My Transaction</h1>
                    <Transaction />
                </div>
            </div>
        </div>
    );
}

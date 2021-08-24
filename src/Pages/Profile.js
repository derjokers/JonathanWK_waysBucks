import MyProfile from "../Components/MyProfile";
import NavbarUser from "../Components/NavbarUser";
import Transaction from "../Components/Transaction";

import '../Styles/Profile.css'

export default function Profile() {
    return (
        <div>
            <NavbarUser />
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

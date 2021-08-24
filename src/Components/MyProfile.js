import profPic from '../assets/avatar/profpic.png';

import '../Styles/MyProfile.css';

export default function MyProfile() {
    return (
        <div className="myProfile">
            <h1>My Profile</h1>
            <div className="profile">
                <img src={profPic} />
                <div className="profData">
                    <h4>Full Name</h4>
                    <p>Egi Ganteng</p>
                    <h4>Email</h4>
                    <p>egigans@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
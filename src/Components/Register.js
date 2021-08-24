import { Modal } from 'react-bootstrap';
import '../Styles/Register.css';
import Login from './Login';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

export default function Register(props) {
    const history = useHistory();

    const toLandingUser = () => {
        history.push('/Home')
    }

    // register
    const [show, setShow] = useState(props.isOpen);
    const handleClose = () => setShow(false);

    // login
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginModal = () => {
        setShow(!show);
        setShowLogin(!showLogin);
    }

    return (
        <>
            { showLogin ? <Login isOpen={true} /> : null}
            <Modal className="register" show={show} onHide={handleClose}>
                <h1 className="registerTitle">Register</h1>
                <form>
                    <input name="email" className="email" type="email" placeholder="Email"/>
                    <input name="password" className="password" type="password" placeholder="Password"/>
                    <input name="fullname" className="fullname" type="fullname" placeholder="Full Name"/>
                    
                    <button onClick={toLandingUser} type="submit" class="btn">Register</button>
                    <p>Already have an account ? Click <b onClick={handleLoginModal}>Here</b></p>
                </form>
            </Modal>
        </>
    )
}

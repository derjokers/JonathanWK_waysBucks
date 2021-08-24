import { Modal } from 'react-bootstrap';
import '../Styles/Login.css';
import Register from './Register';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

export default function Login(props) {
    const history = useHistory();

    const toHomePage = () => {
        history.push('/Home')
    }

    const [show, setShow] = useState(props.isOpen);

    const handleClose = () => setShow(false);

    // register
    const [showRegisterModal, setRegisterModal] = useState(false);
    const handleModalRegister = () => {
        setShow(!show);
        setRegisterModal(!showRegisterModal);
    }

    return (
        <>
            { showRegisterModal ? <Register isOpen={true} /> : null}
            <Modal className="login" show={show} onHide={handleClose}>
                <h1 className="loginTitle">Login</h1>
                <form>
                    <input className="email" type="email" placeholder="Email"/>
                    <input className="password" type="password" placeholder="Password"/>
                    <button onClick={toHomePage} type="submit" class="btn">Login</button>
                    <p>Don't have an account ? Click <b onClick={handleModalRegister}>Here</b></p>
                </form>
            </Modal>
        </>
    )

}


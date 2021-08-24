import { Link, useHistory } from 'react-router-dom';
import '../Styles/DropdownUser.css';
import '../Styles/DropdownAdmin.css';

import productLogo from '../assets/logos/productLogo.png';
import toppingLogo from '../assets/logos/toppingLogo.png';
import logoutLogo from '../assets/logos/logoutLogo.png';

export default function DropdownAdmin(props) {
    const history = useHistory();

    const toAddProduct = () => {
        history.push('/AddProduct')
    }
    const toAddTopping = () => {
        history.push('/AddProduct')
    }
    const logout = () => {
        history.push('/')
    }
    return (
    <div className="dropdownAdmin" >
        <div className="productTopping">
            <div onClick={toAddProduct} className="productLogo">
                <img src={productLogo} />
                <p>Add Product</p>
            </div>
                <div onClick={toAddProduct} className="toppingLogo">
                    <img src={toppingLogo} />
                    <p>Add Topping</p>
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
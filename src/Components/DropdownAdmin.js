import '../Styles/DropdownUser.css';
import '../Styles/DropdownAdmin.css';

import productLogo from '../assets/logos/productLogo.png';
import toppingLogo from '../assets/logos/toppingLogo.png';
import logoutLogo from '../assets/logos/logoutLogo.png';

export default function DropdownAdmin(props) {
    return (
    <div className="dropdownAdmin" >
        <div className="productTopping">
            <div className="productLogo">
                <img src={productLogo} />
                <p>Add Product</p>
            </div>
            <div className="toppingLogo">
                <img src={toppingLogo} />
                <p>Add Topping</p>
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
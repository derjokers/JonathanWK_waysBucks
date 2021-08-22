import FormOrder from "../Components/FormOrder";
import ReviewOrder from "../Components/ReviewOrder";

import '../Styles/Cart.css';
import NavbarWaysbucks from '../Components/NavbarWaysbucks';

export default function Cart(props) {
    return (
        <>
        <NavbarWaysbucks />
        <div className="cart">
            <h2>My Cart</h2>
            <div className="cartTransaction">
                <ReviewOrder />
                <FormOrder />
            </div>
        </div>
        </>
    );
}


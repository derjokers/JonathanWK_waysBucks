import iceCoffeePalmSugar from '../assets/img/products/iceCoffeePalmSugar.png';
import binLogo from '../assets/logos/binLogo.png';
import attachOfTransaction from '../assets/logos/attachOfTransaction.png';

import '../Styles/ReviewOrder.css';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function ReviewOrder() {
    return (
        <div className="reviewOrder">
            <h3>Review Your Order</h3>
            <hr />
            <ProductCart 
                topping="Bill Berry Boba, Bubble Tea Gelatin"
                price="Rp.33.000"
            />
            {/* <ProductCart 
                topping="Bill Berry Boba, Mango"
                price="Rp.36.000"
            /> */}
            <hr />
            <div className="orderTransaction">
                <QuantityTotal />
                <img src={attachOfTransaction} />
            </div>
        </div>
    );
}

function ProductCart(props) {
    return (
        <div className="productCart">
            <img src={iceCoffeePalmSugar} />
            <div className="descProductCart" >
                <h4>Ice Coffee Palm Sugar</h4>
                <p className="toppingProduct">
                    <b>Topping</b><span>&nbsp;:&nbsp;</span> {props.topping}
                </p>
            </div>
            <div className="priceDeleteProduct">
                <p>{props.price}</p>
                <img src={binLogo} />
            </div>
        </div>
    )
}

function QuantityTotal() {
    return (
        <div className="quantityTotal">
            <hr />
            <div className="subTotal">
                <p>Subtotal</p>
                <p>33.000</p>
            </div>
            <div className="qty">
                <p>Qty</p>
                <p>1</p>
            </div>
            <hr />
            <div className="totalPrice">
                <p>Total</p>
                <p>33.000</p>
            </div>
        </div>
    )
}
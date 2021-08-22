import iceCoffeePalmSugar from '../assets/img/products/iceCoffeePalmSugar.png';
import binLogo from '../assets/logos/binLogo.png';
import attachOfTransaction from '../assets/logos/attachOfTransaction.png';

import '../Styles/ReviewOrder.css';

export default function ReviewOrder() {
    return (
        <div className="reviewOrder">
            <h3>Review Your Order</h3>
            <hr />
            <ProductCart />
            <ProductCart />
            <hr />
            <div className="orderTransaction">
                <QuantityTotal />
                <img src={attachOfTransaction} />
            </div>
        </div>
    );
}

function ProductCart() {
    return (
        <div className="productCart">
            <img src={iceCoffeePalmSugar} />
            <div className="descProduct" >
                <h4>Ice Coffee Palm Sugar</h4>
                <p className="toppingProduct">
                    <b>Topping</b><span>&nbsp;:&nbsp;</span> Test
                </p>
            </div>
            <div className="priceDeleteProduct">
                <p>Rp.33.000</p>
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
                <p>69.000</p>
            </div>
            <div className="qty">
                <p>Qty</p>
                <p>2</p>
            </div>
            <hr />
            <div className="totalPrice">
                <p>Total</p>
                <p>69.000</p>
            </div>
        </div>
    )
}
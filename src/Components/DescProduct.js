import ToppingProduct from "./ToppingProduct";

import '../Styles/DescProduct.css';

import iceCoffeePalmSugar from '../assets/img/products/iceCoffeePalmSugar.png';

export default function DescProduct(props) {
    return (
        <div className="descProduct">
            <img
                src={iceCoffeePalmSugar}
            />
            <div className="product" >
                <h1>Ice Coffee Palm Sugar</h1>
                <p>Rp.27.000</p>
                <ToppingProduct />
                <div className="totalPrice" >
                    <p>Total</p>
                    <p>Rp.27.000</p>
                </div>
                <button>Add Cart</button>
            </div>
        </div>
    );
}
import ToppingProduct from "./ToppingProduct";

import '../Styles/DescProduct.css';

import iceCoffeePalmSugar from '../assets/img/products/iceCoffeePalmSugar.png';
import { useHistory } from "react-router-dom";

export default function DescProduct(props) {
    const history = useHistory();

    const toCart = () => {
        history.push("/Cart")
    }
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
                <button onClick={toCart}>Add Cart</button>
            </div>
        </div>
    );
}
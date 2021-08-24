import '../Styles/Products.css';

import iceCoffeePalmSugar from '../assets/img/products/iceCoffeePalmSugar.png';
import iceCoffeeGreenTea from '../assets/img/products/iceCoffeeGreenTea.png';
import hanamiLatte from '../assets/img/products/hanamiLatte.png';
import cleponCoffee from '../assets/img/products/cleponCoffee.png';
import { useHistory } from 'react-router-dom';

export default function Products() {
    const history = useHistory();

    const toDetailProduct = () => {
        history.push('/DetailProduct')
    }
    
    return (
        <div className="products">
            <h1>Lets Order</h1>
            <div className="productCards">
                <Card page={toDetailProduct} product={iceCoffeePalmSugar} name="Ice Coffee Palm Sugar" price="Rp.27.000" />
                <Card product={iceCoffeeGreenTea} name="Ice Coffee Green Tea" price="Rp.31.000" />
                <Card product={hanamiLatte} name="Hanami Latte" price="Rp.29.000" />
                <Card product={cleponCoffee} name="Clepon Coffee" price="Rp.28.000" />
            </div>
        </div>
    );
}

function Card(props) {
    
    return (
        <div onClick={props.page} className="card">
            <div className="img">
                <img src={props.product} />
            </div>
            <div className="productDesc">
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

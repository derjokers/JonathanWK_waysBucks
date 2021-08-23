import CardTopping from "./CardTopping";

import '../Styles/ToppingProduct.css';

export default function ToppingProduct(props) {
    return (
        <div className="toppingProduct"> 
            <h4>Topping</h4>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >
                <CardTopping />
                <CardTopping />
                <CardTopping />
                <CardTopping />
                <CardTopping />
            </div>
        </div>
    );
}
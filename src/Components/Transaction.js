import logo from '../assets/logos/waysbucks.png';
import qrcode from '../assets/img/qr-code.png';

import iceCoffeePalmSugar from '../assets/img/products/iceCoffeePalmSugar.png';

import '../Styles/Transaction.css';

export default function Transaction(props) {
    return (
        <div className="transaction">
            <div className="choseProducts">
                <BoughtProduct 
                    image={iceCoffeePalmSugar} 
                    name="Ice Coffee Palm Sugar" 
                    topping="Bill Berry Boba, Bubble Tea Gelatin"
                    price="Rp.33.000" />
                <BoughtProduct 
                    image={iceCoffeePalmSugar} 
                    name="Ice Coffee Palm Sugar" 
                    topping="Bill Berry Boba, Mango"
                    price="Rp.36.000" />
            </div>
            <div className="transactionProcess">
                <img 
                    style={{
                        width: '50px', 
                        height: '50px', 
                        marginLeft: '35px',
                        marginTop: '13px',
                        marginBottom: '25px',
                    }} src={logo} />
                <img style={{
                        width: '74px', 
                        height: '74px', 
                        marginLeft: '20px',
                        marginBottom: '10px',
                    }} src={qrcode} />
                <div className="status">
                    <p>On The Way</p>
                </div>
                <p className="totalPrice">
                    Sub Total<span>&nbsp;:&nbsp;</span> Rp.69.000
                </p>
            </div>
        </div>
    );
}

function BoughtProduct(props) {
    return (
        <div className="boughtProduct">
            <img src={props.image} />
            <div className="transactionDesc">
                <h4>{props.name}</h4>
                <p className="date"><span style={{fontWeight: '900'}}>Saturday</span>, 5 March 2020</p>
                <p className="toping">
                    <b>Toping</b><span>&nbsp;:&nbsp;</span> {props.topping}
                </p>
                <p className="price">
                    Price<span>&nbsp;:&nbsp;</span> {props.price}
                </p>
            </div>
        </div>
    )
}
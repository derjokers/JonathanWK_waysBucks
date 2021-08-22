import '../Styles/FormOrder.css';

export default function FormOrder(props) {
    return (
        <form className="formOrder">
            <input className="name" type="name" placeholder="Name"/>
            <input className="email" type="email" placeholder="Email"/>
            <input className="phone" type="number" placeholder="Phone"/>
            <input className="posCode" type="text" placeholder="Pos Code"/>
            <textarea className="address" type="address" placeholder="Address"/>
            <button type="submit" class="btn">Pay</button>
        </form>
    );
}
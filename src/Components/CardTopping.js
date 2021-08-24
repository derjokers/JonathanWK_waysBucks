import '../Styles/CardTopping.css';

export default function CardTopping(props) {
    return (
        <div className="cardTopping">
            <div className="cardBody">
                <label className="blockCheck">
                    <img 
                        className="imgTopping" 
                        src={props.image} 
                        alt="topping"
                    />
                    <input 
                        className="hiddenCheck"
                        type="checkbox"
                    />
                    <span className='checkmark'></span>
                </label>
                <div className="toppingName">
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    );
}
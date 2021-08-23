import '../Styles/CardTopping.css';

import bubbleTeaGelation from '../assets/img/toppings/bubbleTeaGelatin.png'

export default function CardTopping(props) {
    return (
        <div className="cardTopping">
            <div className="cardBody">
                <label className="blockCheck">
                    <img 
                        className="imgTopping" 
                        src={bubbleTeaGelation} 
                        alt="topping"
                    />
                    <input 
                        className="hiddenCheck"
                        type="checkbox"
                    />
                    <span className='checkmark'></span>
                </label>
                <div className="toppingName">
                    <p>Bubble Tea Gelatin</p>
                </div>
            </div>
        </div>
    );
}
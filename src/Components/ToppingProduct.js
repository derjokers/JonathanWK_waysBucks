import CardTopping from "./CardTopping";

import bubbleTeaGelatin from '../assets/img/toppings/bubbleTeaGelatin.png'
import bobaMango from '../assets/img/toppings/bobaMango.png'
import billBerryBoba from '../assets/img/toppings/billBerryBoba.png'
import greenCoconut from '../assets/img/toppings/greenCoconut.png'
import kiwiPoppingPearl from '../assets/img/toppings/kiwiPoppingPearl.png'
import mango from '../assets/img/toppings/mango.png'
import matchaCantaloupe from '../assets/img/toppings/matchaCantaloupe.png'
import strawberryPopping from '../assets/img/toppings/strawberryPopping.png'

import '../Styles/ToppingProduct.css';

export default function ToppingProduct(props) {
    return (
        <div className="toppingProduct"> 
            <h4>Topping</h4>
            <div style={{height: '200px' ,display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >
                <CardTopping image={bubbleTeaGelatin} name="Bubble Tea Gelatin" />
                <CardTopping image={mango} name="Mango" />
                <CardTopping image={greenCoconut} name="Green Coconut" />
                <CardTopping image={bobaMango} name="Boba Mango" />
                <CardTopping image={billBerryBoba} name="Bill Berry Boba" />
                <CardTopping image={kiwiPoppingPearl} name="Kiwi Popping Pearl" />
                <CardTopping image={matchaCantaloupe} name="Matcha Cantaloupe" />
                <CardTopping image={strawberryPopping} name="Strawberry Popping" />
            </div>
        </div>
    );
}
import { FormControl, InputGroup } from 'react-bootstrap';

import uploadLogo from '../assets/logos/uploadLogo.png';
import kiwiPoppingPearl from '../assets/img/toppings/kiwiPoppingPearl.png';

import '../Styles/AddProduct.css';
import '../Styles/AddTopping.css';
import NavbarAdmin from '../Components/NavbarAdmin';

export default function AddTopping(props) {
    return (
        <div>
            <NavbarAdmin />
            <div className="addTopping">
                <div className="formTopping"> 
                    <h1>Topping</h1>
                    <form className="formAdd">
                        <FormControl className="toppingName" type="name" placeholder="Name Topping"/>
                        <FormControl className="toppingPrice" type="price" placeholder="Price"/>
                        <InputGroup>
                            <FormControl className="formPhoto" type="photo" placeholder="Photo Product"/>
                            <InputGroup.Text className="uploadPhoto"><img src={uploadLogo} /></InputGroup.Text>
                        </InputGroup>
                        <button type="submit" class="addButton">Add Topping</button>
                    </form>
                </div>
                <img style={{
                    width: '427px',
                    height: '327px',
                    marginTop: '50px'
                }} src={kiwiPoppingPearl} />
            </div>
        </div>
    );
}
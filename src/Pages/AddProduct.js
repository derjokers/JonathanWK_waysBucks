import { FormControl, InputGroup } from 'react-bootstrap';
import '../Styles/AddProduct.css';

import uploadLogo from '../assets/logos/uploadLogo.png';
import iceCoffeePalmSugar from '../assets/img/products/iceCoffeePalmSugar.png';
import NavbarAdmin from '../Components/NavbarAdmin';

export default function AddProduct() {
    return (
        <div>
            <NavbarAdmin />
            <div className="addProduct">
                <div className="formProduct"> 
                    <h1>Product</h1>
                    <form className="formAdd">
                        <FormControl className="productName" type="name" placeholder="Name Product"/>
                        <FormControl className="productPrice" type="price" placeholder="Price"/>
                        <InputGroup>
                            <FormControl className="formPhoto" type="photo" placeholder="Photo Product"/>
                            <InputGroup.Text className="uploadPhoto"><img src={uploadLogo} /></InputGroup.Text>
                        </InputGroup>
                        <button type="submit" class="addButton">Add Product</button>
                    </form>
                </div>
                <img style={{
                    width: '436px',
                    height: '555px',
                    borderRadius: '10px'
                }} src={iceCoffeePalmSugar} />
            </div>
        </div>
    );
}
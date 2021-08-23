import DescProduct from "../Components/DescProduct";
import NavbarWaysBucks from "../Components/NavbarWaysbucks";

export default function DetailProduct(props) {
    return (
        <div className="detailProduct">
            <NavbarWaysBucks />
            <DescProduct />
        </div>
    );
}
import DescProduct from "../Components/DescProduct";
import NavbarUser from "../Components/NavbarUser";
import NavbarWaysBucks from "../Components/NavbarWaysbucks";

export default function DetailProduct(props) {
    return (
        <div className="detailProduct">
            <NavbarUser />
            <DescProduct />
        </div>
    );
}
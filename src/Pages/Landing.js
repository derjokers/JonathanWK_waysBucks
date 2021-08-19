import Jumbotron from "../Components/Jumbotron";
import NavbarWaysBucks from "../Components/NavbarWaysbucks";
import Products from "../Components/Products";

export default function Landing(props) {
    return (
        <div className="landing">
            <NavbarWaysBucks />
            <Jumbotron />
            <Products />
        </div>
    );
}
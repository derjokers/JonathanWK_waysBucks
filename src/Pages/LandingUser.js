import Jumbotron from "../Components/Jumbotron";
import NavbarUser from "../Components/NavbarUser";
import Products from "../Components/Products";

export default function LandingUser(props) {
    return (
        <div className="landingUser">
            <NavbarUser />
            <Jumbotron />
            <Products />
        </div>
    );
}
import '../Styles/Register.css';

export default function Register() {
    return (
        <div className="register">
            <h1 className="registerTitle">Register</h1>
            <form>
                <input className="email" type="email" placeholder="Email"/>
                <input className="password" type="password" placeholder="Password"/>
                <input className="fullname" type="fullname" placeholder="Full Name"/>
                <button type="submit" class="btn">Register</button>
                <p>Already have an account ? Click <b>Here</b></p>
            </form>
        </div>
    )
}

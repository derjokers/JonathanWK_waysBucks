import '../Styles/Login.css';

export default function Login() {
    return (
        <div className="login">
            <h1 className="loginTitle">Login</h1>
            <form>
                <input className="email" type="email" placeholder="Email"/>
                <input className="password" type="password" placeholder="Password"/>
                <button type="submit" class="btn">Login</button>
                <p>Don't have an account ? Click <b>Here</b></p>
            </form>
        </div>
    )
}


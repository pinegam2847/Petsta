import { loginEmail } from "../firebase";
import { useState } from "react";

function LogIn(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await loginEmail(email, password).then((result)=> {
                console.log(result);
                console.log('success');
                const user = result.user;
                props.setLoggedIn(true);
            });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form className="log" onSubmit={handleSubmit}>
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}

export default LogIn;
import { useState } from "react";
import { signupEmail } from "../firebase";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signupEmail(email, password).then((result) => {
                console.log(result);
                const user = result.user;
                console.log(user.email, user.uid);
            });
        }
        catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
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
            <button type="submit">Signup</button>
        </form>
    );
}

export default SignUp;
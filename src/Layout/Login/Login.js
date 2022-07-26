import React, { useState } from "react";
import { loginUser } from "../../utils/api";
import ErrorAlert from "../../ErrorAlert";
import PropTypes from 'prop-types';
import './login.css';

export default function Login({ setToken }) {
    const { error, setError } = useState([]);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        try {
            const token = await loginUser({
                username,
                password
            }, abortController.signal);
            setToken(token)

        } catch (err) {
            setError([err.message]);
        }
        return () => abortController.abort();
    }

    return (
        <div>
            <ErrorAlert error={error} />
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username/Email"
                    className="username"
                />
                <input
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    className="password"
                />
                <div className="loginButton">
                    <button onClick={handleSubmit} type="submit" className="submitButton">
                        Login
                    </button>
                    <a href="/"><p className="newUser">New user?</p></a>
                </div>
            </form>

            <div className="footer">
                <h3>Welcome</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur efficitur metus nec.</p>
                <p>SIMPLY SOCIAL &copy; 2022</p>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
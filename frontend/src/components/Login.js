import React, { useState } from "react";
import { login } from "../api";
//heel

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(user);
            localStorage.setItem("token", response.data.access);
            alert("Login Successful");
        } catch (error) {
            alert("Invalid Credentials");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;

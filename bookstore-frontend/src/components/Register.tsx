import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./core";
import axios from "axios";
import "./Login.css";

export const Register = () => {
    const [username, setUsername] = useState(' ');
    const [password, setPassword] = useState(' ');
    const nav = useNavigate();

    async function handleRegister() {
        try {
            const response = await axios.get(`${baseUrl}/Users/Details?name=${username}`);
            console.log(response.data);
            nav('/');
        }
        catch (error) {
            const userData = {
                name: username,
                password: password,
                purchases: []
            };

            axios.post(`${baseUrl}/Users/Create`,userData)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log("Error: ", error);
                })
            nav('/');
            return;
        }
    }

    return (
        <section className="container">
            <div className="header"> Register </div>
            <form className="inputs">
                <div className="input-around">
                    <label> Enter an username: </label>
                    <input className="input" type="text" autoComplete="off" onChange={(e) => { setUsername(e.target.value) }} />
                </div>

                <div className="input-around">
                    <label>Enter a password: </label>
                    <input className="input" type="password" autoComplete="off" onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <button className="button" type="button" onClick={handleRegister}> Register </button>
            </form>
        </section>
    )
}
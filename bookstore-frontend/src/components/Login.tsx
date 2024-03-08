import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./core";
import "./Login.css"

export interface AuthState {
    username?: string,
    password?: string
}

const initialState: AuthState = {
    username: '',
    password: ''
}

export const AuthContext = React.createContext<AuthState>(initialState);

export const Login = () => {
    const [state, setState] = useState<AuthState>({});
    const { username, password } = state;
    const nav = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.get(`${baseUrl}/Users/Details?name=${username}`);
            const user = response.data;

            if (user === null) {
                console.log("Wrong username");
                return;
            }
            else if (user.password === password) {
                nav('/books');
            }
            else {
                console.log("Wrong password");
                return;
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="container">
            <div className="header"> Sign up </div>
            <form className="inputs">
                <div className="input-around">
                    <input className="input" type="text" placeholder="Username" autoComplete="off" onChange={(e) => setState({...state, username: e.target.value})} />
                </div>

                <div className="input-around">
                    <input className="input" type="password" placeholder="Password" autoComplete="off" onChange={(e) => setState({...state, password: e.target.value})} />
                </div>

                <button className="button" type="button" onClick={handleLogin}> Sign in </button>

                <a className="text" onClick={() => {nav('/register')}}> Don't have an account? Register here! </a>
            </form>
        </section>
    );
}
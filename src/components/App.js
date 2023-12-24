import React, { useState } from "react";
import "../styles/App.css";

export default function App() {
    const [theme, setTheme] = useState('light');

    const handleChange = () =>{
        setTheme((prevTheme) => (prevTheme === 'light' ? 'light' : 'dark')) ;
    };

    return (
        <div id={`${theme === "light" ? "dark" : "light"}`}
        className="App">
            <h1>Newton School</h1>
            <div>
                <form>
                    <label>UserName</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                    <button>Login</button>
                </form>
            </div>
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <input onChange={handleChange}
            type="checkbox" id="switch" />
            <label for="switch" className="label">
                Toggle
            </label>
        </div>
    );
}

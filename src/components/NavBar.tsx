import React from 'react';
import {NavLink} from "react-router-dom"

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2">
                <div className="container">
                    <a href="/" className="brand-logo">React + TypeScript</a>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/">Список дел</NavLink></li>
                        <li><NavLink to="/about">Информация</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

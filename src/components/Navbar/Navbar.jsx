import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItem'
import Button from "../Button/Button"
import './Navbar.css'

function Navbar() {
    const [clicked, setClicked] = useState(false);

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Trinh <i className="fab fa-react"></i></h1>
            <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>

                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
            <div className="outer-warp">
                {/* <Button className="contact-button">Contact</Button> */}
            </div>
        </nav>
    )
}

export default Navbar

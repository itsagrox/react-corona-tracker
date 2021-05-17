import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import logoWhite from '../../images/logoWhite.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper grey darken-3 ">
                <div className="container">
                    <Link to='/' className="brand-logo">
                        <img className={styles.logo} src={logoWhite} alt="TrackOvid" />
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to='/india'>India</NavLink></li>
                        <li><NavLink to='/vaccine-availability'>Vaccine</NavLink></li>
                    </ul>


                </div>
            </nav>
        </div>
    )
}

export default Navbar

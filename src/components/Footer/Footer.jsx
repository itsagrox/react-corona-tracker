import React from 'react'
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className={styles.main}>
            <footer class="page-footer grey darken-3">
                <div class="footer-copyright">
                    <div class="container">
                        <NavLink to='/india' className="grey-text text-lighten-4 left" >India</NavLink>
                        <NavLink to='/vaccine-availability' className="grey-text text-lighten-4 right">Vaccine</NavLink>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer

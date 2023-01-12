import React, { FC, useState } from 'react'
import { FaMoon,FaBars } from 'react-icons/fa';
import styles from './styles/Navbar.module.css'

const Navbar:FC = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            LOGO
        </div>
        <nav className={toggle ? styles.navbar : styles.navbar_grow}>
            <ul>
                <li>
                    <a href="">Home</a>
                    <a href="">Projects</a>
                    <a href="">Skils</a>
                </li>
            </ul>
        </nav>
        <div className={styles.icons}>
            <FaMoon/>
            <FaBars 
              onClick={()=>setToggle(!toggle)} 
              className={styles.button_menu}
            />
        </div>
    </header>
  )
}

export default Navbar

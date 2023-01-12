import React from 'react'
import styles from './Section.module.css';
import { IoArrowForwardSharp } from 'react-icons/io5';

const Section = () => {

  return (
    <div className={styles.section_container}>
        <div className={styles.section_left}>
        </div>
        <div className={styles.section_rigth}>
        </div>
        <div className={styles.section_hero}>
            <img src="https://st4.depositphotos.com/1012074/25299/v/600/depositphotos_252991838-stock-illustration-young-avatar-face-with-sunglasses.jpg" alt="photoperfil" />
            <h1>I'm Bastian Garces</h1>
            <p>Full Stack Developer Javascript</p>
            <button>See Projects <IoArrowForwardSharp/></button>
        </div>
    </div>
  )
}

export default Section
import React from 'react'
import { FaJsSquare,FaReact,FaNode,FaHtml5,FaSass } from 'react-icons/fa';
import styles from './Skills.module.css'
const skills = [
    {
        name:"Javascript",
        icon: <FaJsSquare/>,
        url:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
    {
        name:"ReactJs",
        icon:<FaReact/>,
        url:'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
        name:"NodeJs",
        icon:<FaNode/>,
        url:'https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg'
    },
    {
        name:"Html5",
        icon:<FaHtml5/>,
        url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png'
    },
    {
        name:"Sass",
        icon:<FaSass/>,
        url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png'
    },
    {
        name:"",
        icon:'',
        url:''
    },
]

const Skills = () => {
  return (
    <div className={styles.skills_container}>
        <h1>Skills</h1>
        <div className={styles.skills_card_container}>
            {skills?.map(({name,icon, url}, index)=>(
                <div key={index} className={styles.skills_card}>
                    
                    <h2>{name}{icon}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills
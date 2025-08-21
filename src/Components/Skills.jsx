import {React,useState} from 'react'
import styles from '../Pages/Portfolio/Portfolio.module.css'
import reactImg from "../assets/react.png";
import javascriptImg from "../assets/javascript.png";
import cssImg from "../assets/css.png";
import htmlImg from "../assets/html.png";
import CplusplusImg from "../assets/c++.png";
import tailwindImg from "../assets/tailwind.png";
import githubImg from "../assets/github.jpg"
import pythonImg from "../assets/python.png"
import mongodbImg from '../assets/mongodb.png'
import nodejsImg from '../assets/nodejs.png'
const Skills = () => {
	const [SkillSet, setSkillSet] = useState([
    reactImg,
    javascriptImg,
    cssImg,
    htmlImg,
    CplusplusImg,
		pythonImg,
    mongodbImg,
    tailwindImg,
		githubImg,
    nodejsImg
  ]);
	return (
		<>
				<div className={styles.main}>
        <div className={styles.Skills}>
          <h1 className={styles["skill-heading"]}>My Skills</h1>
          <div className={styles.skillsImg}>
            {SkillSet.map((ele, idx) => (
              <div key={idx} className={styles.banner}>
                <img className={styles.img} src={ele} alt="" />
              </div>
            ))}
          </div>
        </div>
        
      </div>
		</>
	)
}

export default Skills
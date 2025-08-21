import React, { useState } from "react";
import styles from "./Project.module.css";
import reactImg from "../../../assets/react.png";
import { ProjectList } from "../../../Project.js";
import { Link, Navigate, NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className={styles.heading}>My Projects</div>
        <div className={styles.ParentCard}>
        {ProjectList.map((ele, idx) => (
          <div key={idx} className={styles.Card}>
            <div className={styles.Image}>
              <img src={ele.imageUrl} alt="" />
            </div>
            <div className={styles.Stack}> Tech Stack : 
            <div className={styles.techStack}>
            {ele.techStack.slice(0,3).map((tech, index) => (
              <span key={index} className={styles.techItem}>{tech}...</span>
            ))}
          </div>
            </div>
            <div className={styles.Description}>{`${ele.description.slice(0,60)}....`}</div>

            <Link className={styles.btn} to={`/portfolio/${ele.id}`}>
              Know More...
            </Link>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default Projects;

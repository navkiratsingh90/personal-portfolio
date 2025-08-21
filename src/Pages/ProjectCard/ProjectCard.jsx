import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { ProjectList } from "../../Project";
import reactImg from "../../assets/react.png";

const ProjectCard = () => {


  const { id } = useParams();
  const [Project, setProject] = useState(null);

  useEffect(() => {
    const projectData = ProjectList.find((p) => p.id === parseInt(id));
    if (projectData) {
      setProject(projectData);
    }
  }, [id]);

  if (!Project) return <h2>Project Not Found</h2>;


return (
    <div className={styles.parent}>
          <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{Project.title}</h1>
        <div className={styles.metaContainer}>
          
          <a 
            href={Project.githubUrl} 
            className={styles.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img 
            src={Project.imageUrl} 
            // alt={ProjectList.title} 
            className={styles.ProjectListImage}
          />
        </div>

        <div className={styles.details}>
          {/* <h2 className={styles.sectionTitle}>Project Overview</h2>
          <p className={styles.description}>{Project.description}</p> */}
          
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          <div className={styles.techStack}>
            {Project.techStack.map((tech, index) => (
              <span key={index} className={styles.techItem}>{tech}</span>
            ))}
          </div>
          
          <h2 className={styles.sectionTitle}>Features</h2>
          <ul className={styles.features}>
            {Project.features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.additionalInfo}>
        <h2 className={styles.sectionTitle}>Project Details</h2>
        <p className={styles.additionalText}>{Project.description}</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ProjectCard;

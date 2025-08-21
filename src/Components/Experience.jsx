// ExperienceEducation.jsx
import React from 'react';
import styles from './Experience.module.css';

const ExperienceEducation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>EXPERIENCE & EDUCATION</h1>
      
      <div className={styles.timeline}>
        {/* Item 1 */}
        {/* <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>MARCH 2024 - PRESENT</div>
          <div className={styles.timelineContent}>
            <h3 className={styles.jobTitle}>BACKEND DEVELOPER</h3>
            <p className={styles.organization}>ERK LABS</p>
            <p className={styles.description}>
              Developed GIRPC APIs in Golang, and Tested on Postman, Handled PGSQL Database, Handled AWS (S3, EC2, KeySpace, LightSail, IAM Roles)
            </p>
          </div>
        </div> */}
        
        {/* Item 2 */}
        {/* <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>JULY 2023 - DEC 2023</div>
          <div className={styles.timelineContent}>
            <h3 className={styles.jobTitle}>WEB DEVELOPER</h3>
            <p className={styles.organization}>LEARNING FOLKS</p>
            <p className={styles.description}>
              Developed a blog website, Enhanced content and optimized UI, Collaborated for innovation and user experience.
            </p>
          </div> 
        </div> */}
        
        {/* Item 3 */}
        <div className={styles.timelineItem}>
        <div className={styles.timelineDate}>JULY 2023 - JULY 2027</div>
          <div className={styles.timelineContent}>
            <h3 className={styles.jobTitle}>B.TECH CSE</h3>
            <p className={styles.organization}>GURU NANAK DEV UNIVERSITY</p>
            <p className={styles.description}>
              Enrolled in B.Tech CSE program, actively pursuing a comprehensive education in Computer Science and Engineering to acquire in-depth knowledge of software development, algorithms, and computer systems, operating system, object oriented concepts, relational database..
            </p>
          </div>
        </div>
        
        {/* Item 4 */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2022</div>
          <div className={styles.timelineContent}>
            <h3 className={styles.jobTitle}>12TH</h3>
            <p className={styles.organization}>Sri guru harkrishan public school</p>
            <p className={styles.description}>
              Completed 12th grade with 91%, earning a CBSE Board certificate, demonstrating academic excellence and readiness for higher education endeavors.
            </p>
          </div>
        </div>
        
        {/* Item 5 */}
        <div className={`${styles.timelineItem} ${styles.lastItem}`}>
          <div className={styles.timelineDate}>2020</div>
          <div className={styles.timelineContent}>
            <h3 className={styles.jobTitle}>10TH</h3>
            <p className={styles.organization}>Sri guru harkrishan public school</p>
            <p className={styles.description}>
              Successfully completed 10th grade, obtaining 80% in ICSE Board, showcasing a strong foundation in academics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
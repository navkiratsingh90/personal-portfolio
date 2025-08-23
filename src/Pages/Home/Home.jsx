import { React, useEffect } from "react";
import user from "../../assets/user.jpg";
import styles from "./Home.module.css";
import Button from "../../Components/Button/Button.jsx";
import aos from "aos";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    aos.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
      <>
          <div className={styles.wrapper}>
              <div className={styles.sections}>
                  {/* <div className={styles["bg-part"]}></div> */}
                  <div className={styles["image-section"]}>
                      <div className={styles.image}>
                          <img data-aos="zoom-in" src={user} alt="" />
                      </div>
                  </div>
                  <div
                      data-aos="zoom-out"
                      className={styles["information-section"]}
                  >
                      <h1 className={styles.greet}>hi there !</h1>
                      <h1 className={styles.name}>
                          I'm{" "}
                          <strong style={{ color: "#8a2be2" }}>
                              Navkirat singh
                          </strong>
                      </h1>
                      <p className={styles.education}>
                          I am currently persuing B.Tech Computer Science and
                          Engineering in Guru Nanak Dev University, Amritsar,
                          Punjab, in 5th semester.
                      </p>
                      <p className={styles.interest}>
                          My field of interest is Web Development. I'm a
                          beginner with React and have decent knowledge in HTML,
                          CSS, JS and C++, Node js, MongoDB, PostgreSQL, Express Js.
                      </p>
                      <Button value="Ask More..." />
                  </div>
              </div>
          </div>
      </>
  );
};

export default Home;

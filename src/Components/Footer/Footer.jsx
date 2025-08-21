import React from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import styles from './Footer.module.css'

const Footer = () => {
  return (
      <footer className={styles.footer}>
          <div className={styles["footer-container"]}>
              {/* Logo Section */}
              <div className={styles["footer-section"]}>
                  <h2 className={styles["logo"]}>
                      <span className={styles["logo-icon"]}>N</span> Navkirat
                  </h2>
              </div>

              {/* Navigation Section */}
              <div className={styles["footer-section"]}>
                  <h3 className={styles["footer-heading"]}>/ Navigation</h3>
                  <ul className={styles["footer-ul"]}>
                      <li className={styles["footer-list"]}>
                          <Link to={'/'} className={styles["footer-Link"]}>
                            Home
                          </Link>
                      </li>
                      <li className={styles["footer-list"]}>
                          <Link to={'/portfolio'} className={styles["footer-Link"]}>
                            Portfolio
                          </Link>
                      </li>
                      <li className={styles["footer-list"]}>
                          <Link to={'about'} className={styles["footer-Link"]}>
                              About Us
                          </Link>
                      </li>
                      <li className={styles["footer-list"]}>
                          <Link to={'/contact'} className={styles["footer-Link"]}>
                              Contact Us
                          </Link>
                      </li>
                  </ul>
              </div>

              {/* Socials Section */}
              <div className={styles["footer-section"]}>
                  <h3 className={styles["footer-heading"]}>/ Socials</h3>
                  <div className={styles['social-icons']}>
                      <Link className={styles["footer-Link"]}>
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </Link>
                      <Link className={styles["footer-Link"]}>
                          <FontAwesomeIcon icon={faTwitter} size="lg" />
                      </Link>
                      <Link className={styles["footer-Link"]}>
                          <FontAwesomeIcon icon={faFacebook} size="lg" />
                      </Link>
                  </div>
              </div>

              {/* Contact Section */}
              <div className="footer-section">
                  <h3 className={styles["footer-heading"]}>/ Contact</h3>
                  <p className={styles["footer-p"]}>kiratsingh2181@gmail.com</p>
              </div>
          </div>
      </footer>
  );
};

export default Footer;

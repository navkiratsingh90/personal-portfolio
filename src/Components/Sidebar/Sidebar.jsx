// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   FaHome,
//   FaUser,
//   FaMailBulk,
//   FaShoppingBag,
//   FaArrowCircleLeft,
//   FaInstagram,
//   FaWhatsapp,
//   FaLinkedin,
// } from "react-icons/fa";
// import { CgMenuLeftAlt } from "react-icons/cg";
// import { FaXTwitter } from "react-icons/fa6";
// import aos from "aos";
// import "aos/dist/aos.css";
// import styles from "./Sidebar.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   HandleSidebar,
//   HandleResSidebar,
//   HandleIcon,
//   HandleIconTrue
// } from "../../features/SidebarSlice.jsx";
// import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
// import { ImCross } from "react-icons/im";
// import { RxCross1 } from "react-icons/rx";

// const Sidebar = () => {
//   const dispatch = useDispatch();
//   const SidebarClose = useSelector((state) => state.Sidebar.SidebarClose);
//   const ResSidebarOpen = useSelector((state) => state.Sidebar.ResSidebarOpen)
//   const IconSidebar = useSelector(state => state.Sidebar.IconSidebar)
//   const [Links, SetLinks] = useState([
//     {
//       Icon: <FaHome />,
//       Path: "/",
//       Text: "Home",
//     },
//     {
//       Icon: <FaUser/>,
//       Path: "/about",
//       Text: "about",
//     },
//     {
//       Icon: <FaMailBulk />,
//       Path: "/contact",
//       Text: "Contact",
//     },
//     {
//       Icon: <FaShoppingBag />,
//       Path: "/portfolio",
//       Text: "Portfolio",
//     },
//   ]);
//   const [SocialLinks, SetSocialLinks] = useState([
//     {
//       Icon: <FaWhatsapp className={styles.socialIcon}/>,
//       CSS : "containerThree",
//     },
//     {
//       Icon: <FaInstagram className={styles.socialIcon}/>,
//       CSS : "containerOne"
//     },
//     {
//       Icon : <FaLinkedin className={styles.socialIcon}/>,
//       CSS : "containerFour",
//     }
//   ]);

//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     if (width > 800){
//       dispatch(HandleIconTrue())
//     }
//   },[])
//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth);
//             if (width <= 800 && !ResSidebarOpen) {
//                 dispatch(HandleIcon());
//             } else {
//                 dispatch(HandleIconTrue());
//             }
//         };

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     });


//   return (
//       <>
//           <button
//               className={`${
//                   ResSidebarOpen ? styles["moveRight"] : styles.menu
//               }`}
//               onClick={() => dispatch(HandleResSidebar())}
//           >
//               {ResSidebarOpen ? <RxCross1 /> : <CgMenuLeftAlt />}
//           </button>
//           <div
//               className={`
//           ${ResSidebarOpen ? styles.Opened : styles["sidebar-parent"]}
//           ${
//               !ResSidebarOpen
//                   ? SidebarClose
//                       ? styles["sidebar-parent-closed"]
//                       : styles["sidebar-parent-open"]
//                   : ""
//           }
//         `}
//           >
//               <div
//                   className={`${
//                       SidebarClose ? styles["arrow-rotate"] : styles.arrow
//                   } `}
//                   onClick={() => dispatch(HandleSidebar())}
//               >
//                   <FaArrowCircleLeft />
//               </div>
//               <section className="logo">
//                   <NavLink
//                       className={`${
//                           SidebarClose
//                               ? styles["SidebarClosed-text"]
//                               : styles["link-text"]
//                       }`}
//                       to={"/"}
//                   >
//                       {" "}
//                       Logo
//                   </NavLink>
//               </section>

//               <div
//                   className={` ${IconSidebar ? styles.visible : styles.hide} ${
//                       styles["Navlinks-list"]
//                   }`}
//               >
//                   <ul className={styles["ul-list"]}>
//                       {Links.map((ele, idx) => (
//                           <li
//                               className={
//                                   SidebarClose
//                                       ? styles["list-items-no"]
//                                       : styles["list-items-yes"]
//                               }
//                               key={idx}
//                           >
//                               <div
//                                   className={`${styles["list-col"]} ${styles["tooptip-section"]}`}
//                               >
//                                   <NavLink
//                                       className={` ${
//                                           SidebarClose
//                                               ? styles["icon-big"]
//                                               : styles["icon-small"]
//                                       }`}
//                                       to={ele.Path}
//                                   >
//                                       {ele.Icon}
//                                   </NavLink>
//                                   <div
//                                       className={`${
//                                           SidebarClose
//                                               ? styles["tooltip-yes"]
//                                               : styles["tooltip-no"]
//                                       }`}
//                                   >
//                                       {ele.Text}
//                                   </div>
//                               </div>
//                               <NavLink
//                                   to={ele.Path}
//                                   className={`${
//                                       SidebarClose
//                                           ? styles["SidebarClosed-text"]
//                                           : styles["link-text"]
//                                   } ${styles["link-nav"]}`}
//                               >
//                                   {ele.Text}
//                               </NavLink>
//                           </li>
//                       ))}
//                   </ul>
//               </div>
//               <div className={`${styles.btn} ${IconSidebar ? styles.visible : styles.hide}`}>Download CV</div>
//               <div
//                   className={`${IconSidebar ? styles.visible : styles.hide}  
//             ${
//                 SidebarClose
//                     ? styles["card-parent-closed"]
//                     : styles["card-parent"]
//             }`}
//               >   
//                 <div
//                       className={`${
//                           SidebarClose ? styles["card-closed"] : styles.card
//                       }`}
//                   >
//                {
//                   SocialLinks.map((ele,idx) =>
//                       <NavLink
//                           href="#"
//                           key={idx}
//                           className={`${styles.socialContainer} ${styles[`${ele.CSS}`]}`}
//                       >
//                           {ele.Icon}
//                       </NavLink>
//                )
//               }
//               </div>
//               </div>
//           </div>
//       </>
//   );
// };

// export default Sidebar;
import React, { useEffect } from 'react';
import styles from './Sidebar.module.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFileDownload, FaHome, FaUser, FaSuitcase, FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import aos from 'aos'

const Sidebar = ({ isOpen, toggleSidebar, navigateTo, activePage }) => {
  const downloadCV = () => {
    // In a real app, this would download your actual CV file
    alert('Downloading CV...');
  };
    useEffect(() => {
      aos.init({
        duration: 1000, // Animation duration
        once: true, // Whether animation should happen only once
      });
    }, []);

  return (
    <aside  className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>NS</div>
        <h1 className={styles.logoText}>Navkirat Singh</h1>
      </div>
      
      <nav className={styles.nav}>
        <ul>
          <li>
            <button 
              className={`${styles.navLink} ${activePage === 'home' ? styles.active : ''}`}
              onClick={() => navigateTo('home')}
            >
							<Link className={styles.link} to={'/'}>
							<div className={styles.iconText}>
							<FaHome fill='white' /> Home
							</div>
							</Link>
              
            </button>
          </li>
          <li>
            <button 
              className={`${styles.navLink} ${activePage === 'about' ? styles.active : ''}`}
              onClick={() => navigateTo('about')}
            >
							<Link className={styles.link} to={'/about'}>
							<div className={styles.iconText}>
							<FaUser fill='white' /> About
							</div>
							</Link>
            
            </button>
          </li>
          <li>
            <button 
              className={`${styles.navLink} ${activePage === 'portfolio' ? styles.active : ''}`}
              onClick={() => navigateTo('portfolio')}
            >
							<Link className={styles.link} to={'/portfolio'}>
              <div className={styles.iconText}>
							<FaSuitcase  fill='white'/> Portfolio
							</div>
							</Link>
            </button>
          </li>
          <li>
            <button 
              className={`${styles.navLink} ${activePage === 'contact' ? styles.active : ''}`}
              onClick={() => navigateTo('contact')}
            >
							<Link className={styles.link} to={'/contact'}>
             <div className={styles.iconText}>
							<FaMailBulk fill='white' /> Contact
							</div>
							</Link>
            </button>
          </li>
        </ul>
      </nav>
      
      <div className={styles.downloadContainer}>
        <button className={styles.downloadButton} onClick={downloadCV}>
          <FaFileDownload className={styles.downloadIcon} />
          Download CV
        </button>
      </div>
      
      <div className={styles.socialContainer}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FaInstagram />
        </a>
      </div>
      
      <button className={styles.closeButton} onClick={toggleSidebar}>
        &times;
      </button>
    </aside>
  );
};

export default Sidebar;

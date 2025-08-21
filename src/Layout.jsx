import {React, useEffect , useRef,useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import { Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import styles from './Layout.module.css'
import { useSelector } from 'react-redux'
import {GiHamburgerMenu} from 'react-icons/gi'


const Layout = () => {
  const SidebarClose = useSelector(state => state.Sidebar.SidebarClose)
  const ResSidebarOpen = useSelector(state => state.Sidebar.ResSidebarOpen)

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	  const [activePage, setActivePage] = useState('home');
	  const [isMobile, setIsMobile] = useState(false);
	
	  // Handle window resize for responsiveness
	  useEffect(() => {
	    const handleResize = () => {
	      setIsMobile(window.innerWidth <= 950);
	      if (window.innerWidth <= 950) {
	        setIsSidebarOpen(false);
	      } else {
	        setIsSidebarOpen(true);
	      }
	    };
	
	    handleResize();
	    window.addEventListener('resize', handleResize);
	    return () => window.removeEventListener('resize', handleResize);
	  }, []);
	
	  const toggleSidebar = () => {
	    setIsSidebarOpen(!isSidebarOpen);
	  };
	
	  const navigateTo = (page) => {
	    setActivePage(page);
	    if (isMobile) {
	      setIsSidebarOpen(false);
	    }
	  };
  return (
    <>
      <div className={styles.align}>
        <div
          className={`
            ${styles["side"]}
            
          `}
        >
          <div className={`${styles.hamburger} ${isSidebarOpen ? styles.hamburgerOpen : ''}`} 
        onClick={toggleSidebar}
        aria-label="Toggle sidebar">
          <GiHamburgerMenu size={25} fill='white'/>
          </div>
          <Sidebar isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar}
        navigateTo={navigateTo}
        activePage={activePage} />
        </div>
        <div
          className={`${styles.col}`}
          
        >
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout
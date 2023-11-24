import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useSidebarContext } from '../../context/sidebarContext';
import logoImage from '../../assets/images/logo2.png';

const Navbar = () => {
  // Access the openSidebar function from the SidebarContext
  const { openSidebar } = useSidebarContext();
  
  // Initialize a state variable to track whether the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  // Define a function to handle the scroll event and update the "scrolled" state
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  // Use useEffect to add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled' : ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-white'>
          <div className='brand-and-toggler flex align-center justify-between'>
            <Link to="/" className='navbar-brand fw-3 fs-22 flex align-center'>
              <img src={logoImage} alt="Logo" className="logo-image" />
              <span className='navbar-brand-text fw-8'>CarSu FoodHub Recipes</span>
            </Link>
            <div className='navbar-btns flex align-center'>
              {/* Display a button to open the sidebar when clicked */}
              <button type="button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                <AiOutlineMenuUnfold size={27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

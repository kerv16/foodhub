import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Header.scss";
import { AiOutlineMenuUnfold} from "react-icons/ai";
import { useSidebarContext } from '../../context/sidebarContext';
import logoImage from '../../assets/images/logo2.png';


const Navbar = () => {
  const {openSidebar} = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60){
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  return (
    <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled': ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-white'>
          <div className='brand-and-toggler flex align-center justify-between'>
          <Link to="/Home" className='navbar-brand fw-3 fs-22 flex align-center'>
            <img src={logoImage} alt="Logo" className="logo-image" />
            <span className='navbar-brand-text fw-8'>CarSu FoodHub Recipes</span>
          </Link>
            <div className='navbar-btns flex align-center'>
              <button type = "button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                <AiOutlineMenuUnfold size = {27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
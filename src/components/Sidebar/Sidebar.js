import React from 'react';
import { useSidebarContext } from '../../context/sidebarContext';
import { MdCancel } from "react-icons/md";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useMealContext } from '../../context/mealContext';

const Sidebar = () => {
    // Use the SidebarContext to access sidebar state and closeSidebar function
    const { isSidebarOpen, closeSidebar } = useSidebarContext();

    // Use the MealContext to access meal categories
    const { categories } = useMealContext();

    return (
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`}>
            {/* Button to close the sidebar */}
            <button type="button" className='navbar-hide-btn' onClick={() => closeSidebar()}>
                <MdCancel size={24} />
            </button>

            <div className='side-content'>
                <ul className='side-nav'>
                    {/* Map through categories and create sidebar links */}
                    {
                        categories.map(category => (
                            <li className='side-item' key={category.idCategory}>
                                <Link to={`/meal/category/${category.strCategory}`} className='side-link ls-1 fs-13' onClick={() => closeSidebar()}>
                                    {category.strCategory}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar;

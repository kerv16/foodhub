import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/mealContext';
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";


// Dev Images 
import developer1Image from '../../assets/images/kervin.jpg';
import developer2Image from '../../assets/images/johnny.jpg';
import developer3Image from '../../assets/images/russel.jpg';

const HomePage = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();

  return (
    <main className='main-content'>
      {/* Conditional rendering for meals based on loading and availability */}
      {mealsLoading ? (
        // If meals are loading, show a Loader component
        <Loader />
      ) : meals === null ? (
        // If meals are not available, show a NotFound component
        <NotFound />
      ) : meals?.length ? (
        // If there are meals available, show a MealList component with meals as props
        <MealList meals={meals} />
      ) : (
        // If none of the above conditions are met, render an empty string
        ""
      )}

      {categoryLoading ? (
        // If categories are loading, show a Loader component
        <Loader />
      ) : (
        // If categories are available, show a CategoryList component with categories as props
        <CategoryList categories={categories} />
      )}

      {/* Developer information */}
      <footer className="developer-info">
      <div className="meet-team">
        <h2> IT 114 Section FN1 Team Doraemon</h2>
      </div>
        <div className="developer">
          <img src={developer1Image} alt="Developer 1" />
          <p>Kervin Niño Tulang</p>
          <a href="https://www.linkedin.com/in/kervin-ni%C3%B1o-tulang-2597b5297/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100008564107348" target="_blank" rel="noopener noreferrer" className="facebook-icon">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/your-instagram-1" target="_blank" rel="noopener noreferrer" className="instagram-icon">
            <FaInstagram />
          </a>
          <a href="https://github.com/your-github-1" target="_blank" rel="noopener noreferrer" className="github-icon">
            <FaGithub />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="xtwitter-icon">
          <RiTwitterXLine />
          </a>
        </div>
        <div className="developer">
          <img src={developer2Image} alt="Developer 2" />
          <p>John Carlo Elustre</p>
          <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/johhny.luster" target="_blank" rel="noopener noreferrer" className="facebook-icon">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/your-instagram-2" target="_blank" rel="noopener noreferrer" className="instagram-icon">
            <FaInstagram />
          </a>
          <a href="https://github.com/your-github-2" target="_blank" rel="noopener noreferrer" className="github-icon">
            <FaGithub />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="xtwitter-icon">
          <RiTwitterXLine />
          </a>
        </div>
        <div className="developer">
          <img src={developer3Image} alt="Developer 3" />
          <p>Russel Zamora</p>
          <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/neroanjero123" target="_blank" rel="noopener noreferrer" className="facebook-icon">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/your-instagram-3" target="_blank" rel="noopener noreferrer" className="instagram-icon">
            <FaInstagram />
          </a>
          <a href="https://github.com/your-github-3" target="_blank" rel="noopener noreferrer" className="github-icon">
            <FaGithub />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="xtwitter-icon">
          <RiTwitterXLine />
          </a>
        </div>
      </footer>
      
    </main>
  );
}

export default HomePage;

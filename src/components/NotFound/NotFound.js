import React from 'react';
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='container'>
        <span className='error-message'>Oops! We Couldn't Find a Match<span className="emoji">🍽️</span></span>
        <p className='message'>
          It seems we couldn't find a recipe that matches your search. Don't worry, there are plenty of delicious recipes to discover. You can try the following:
        </p>
        <div className='suggestions'>
          <ul>
            <li>Check your spelling and try again.</li>
            <li>Broaden your search by using general keywords.</li>
            <li>Explore our categories and find a new favorite dish.</li>
            <li>Get inspired by our featured recipes below.</li>
          </ul>
        </div>
        <p className='happy-cooking'>Happy cooking!</p>
      </div>
    </div>
  )
}

export default NotFound;

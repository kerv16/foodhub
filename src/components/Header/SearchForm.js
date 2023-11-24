import React, { useState } from 'react';
import "./Header.scss";
import { FcSearch } from "react-icons/fc";
import { useMealContext } from '../../context/mealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsBySearch } from '../../actions/mealsAction';

const SearchForm = () => {
  // Access the navigate function from react-router-dom
  const navigate = useNavigate();

  // Initialize state variables for the search term and error message
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Access the dispatch function from the MealContext
  const { dispatch } = useMealContext();

  // Handle changes in the search input field
  const handleSearchTerm = (e) => {
    e.preventDefault();
    if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  }

  // Handle the search result submission
  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to the home page
    startFetchMealsBySearch(dispatch, searchTerm); // Start fetching meals based on the search term
  }

  return (
    <form className='search-form flex align-center' onSubmit={(e) => handleSearchResult(e)}>
      <input type="text" className='form-control-input text-dark-gray fs-15' placeholder='Search here ...' onChange={(e) => handleSearchTerm(e)} />
      <button type="submit" className='form-submit-btn text-white text-uppercase fs-14'>
        <FcSearch className='btn-icon' size={40} />
      </button>
    </form>
  )
}

export default SearchForm;

import React, { useEffect } from 'react';
import "./CategoryPage.scss";
import { useMealContext } from '../../context/mealContext';
import MealList from '../../components/Meal/MealList';
import { useParams } from 'react-router-dom';
import { startFetchMealByCategory } from '../../actions/mealsAction';

const CategoryPage = () => {
  // Get the 'name' parameter from the URL using 'useParams'
  const { name } = useParams();

  // Get the categoryMeals, dispatch, and categories from the context
  const { categoryMeals, dispatch, categories } = useMealContext();

  // Initialize a variable to store the category description
  let catDescription = "";

  // If categories are available, find the category description that matches the 'name'
  if (categories) {
    categories.forEach(category => {
      if (category?.strCategory === name) {
        catDescription = category?.strCategoryDescription;
      }
    });
  }

  // Fetch meals by category when the 'name' or 'dispatch' changes
  useEffect(() => {
    startFetchMealByCategory(dispatch, name);
  }, [name, dispatch]);

  return (
    <main className='main-content py-5'>
      <div className='container'>
        <div className='cat-description px-4 py-4'>
          {/* Display the category name and description */}
          <h2 className='text-orange fw-8'>{name}</h2>
          <p className='fs-18 op-07'>{catDescription}</p>
        </div>
      </div>
      {
        // Conditionally render the MealList component if categoryMeals is not empty
        (categoryMeals?.length) ? <MealList meals={categoryMeals} /> : null
      }
    </main>
  );
}

export default CategoryPage;

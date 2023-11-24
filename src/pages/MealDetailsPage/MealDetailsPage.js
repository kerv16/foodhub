import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./MealDetailsPage.scss";
import CategoryList from '../../components/Category/CategoryList';
import MealSingle from "../../components/Meal/MealSingle";
import { useMealContext } from '../../context/mealContext';
import { startFetchSingleMeal } from '../../actions/mealsAction';
import Loader from '../../components/Loader/Loader';

const MealDetailsPage = () => {
  // Get the "id" parameter from the URL using useParams
  const { id } = useParams();
  
  // Access meal-related data from the meal context
  const { categories, dispatch, meal, categoryLoading, mealLoading } = useMealContext();

  // Use useEffect to fetch details for a single meal when the component mounts or when "id" changes
  useEffect(() => {
    startFetchSingleMeal(dispatch, id);
  }, [dispatch, id]);

  // Initialize arrays to store ingredients and measures, and an object for the single meal
  let ingredientsArr = [], measuresArr = [], singleMeal = {};

  // Check if meal data is available and not empty
  if (meal && meal?.length > 0) {
    // Extract ingredients and measures from meal data
    for (let props in meal[0]) {
      if (props.includes('strIngredient')) {
        if (meal[0][props]) ingredientsArr.push(meal[0][props]);
      }

      if (props.includes('strMeasure')) {
        if (meal[0][props]) {
          if (meal[0][props].length > 1) {
            measuresArr.push(meal[0][props]);
          }
        }
      }
    }

    // Create a singleMeal object with meal details
    singleMeal = {
      id: meal[0]?.idMeal,
      title: meal[0]?.strMeal,
      category: meal[0]?.strCategory,
      area: meal[0]?.strArea,
      thumbnail: meal[0]?.strMealThumb,
      instructions: meal[0]?.strInstructions,
      source: meal[0]?.strSource,
      tags: meal[0]?.strTags,
      youtube: meal[0]?.strYoutube,
      ingredients: ingredientsArr,
      measures: measuresArr
    }
  }

  return (
    <main className='main-content bg-whitesmoke'>
      {/* Display a loader while meal data is loading, or show the MealSingle component with meal details */}
      {mealLoading ? <Loader /> : <MealSingle meal={singleMeal} />}
      {/* Display a loader while category data is loading, or show the CategoryList component with categories */}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  )
}

export default MealDetailsPage;

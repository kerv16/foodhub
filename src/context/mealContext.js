import React, { createContext, useContext, useEffect, useReducer } from "react";
import { mealReducer } from "../reducers/mealReducer";
import { startFetchCategories } from "../actions/mealsAction";

// Define the initial state for the meal context
const initialState = {
    categories: [],
    categoryLoading: false,
    categoryError: false,
    categoryMeals: [],
    categoryMealsLoading: false,
    categoryMealsError: false,
    meals: [],
    mealsLoading: false,
    mealsError: false,
    meal: [],
    mealLoading: false,
    mealError: false
}

// Create a new context for the meal data
const MealContext = createContext({});

// Create a MealProvider component to provide meal data to the app
export const MealProvider = ({ children }) => {
    // Use a reducer to manage the meal data state and actions
    const [state, dispatch] = useReducer(mealReducer, initialState);

    // Use an effect to fetch meal categories when the component mounts
    useEffect(() => {
        startFetchCategories(dispatch);
    }, []);

    return (
        <MealContext.Provider value={{
            ...state, // Provide the meal data state
            dispatch, // Provide the dispatch function for actions
            startFetchCategories // Provide the startFetchCategories function
        }}>
            {children}
        </MealContext.Provider>
    )
}

// Create a custom hook to access the meal context in components
export const useMealContext = () => {
    return useContext(MealContext);
}

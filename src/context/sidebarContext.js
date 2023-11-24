import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/sidebarReducer";
import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../actions/actions";

// Define the initial state for the sidebar context
const initialState = {
    isSidebarOpen: false
}

// Create a new context for the sidebar state and actions
const SidebarContext = createContext({});

// Create a SidebarProvider component to provide sidebar state and actions to the app
export const SidebarProvider = ({ children }) => {
    // Use a reducer to manage the sidebar state
    const [state, dispatch] = useReducer(reducer, initialState);

    // Define a function to open the sidebar
    const openSidebar = () => {
        dispatch({ type: OPEN_SIDEBAR });
    }

    // Define a function to close the sidebar
    const closeSidebar = () => {
        dispatch({ type: CLOSE_SIDEBAR });
    }

    return (
        <SidebarContext.Provider value={{
            ...state, // Provide the sidebar state
            openSidebar, // Provide the openSidebar function
            closeSidebar // Provide the closeSidebar function
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

// Create a custom hook to access the sidebar context in components
export const useSidebarContext = () => {
    return useContext(SidebarContext);
}

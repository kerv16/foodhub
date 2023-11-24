import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/actions";

// Define the sidebarReducer function, which takes the current state and an action as arguments
const sidebarReducer = (state, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    // When the action type is OPEN_SIDEBAR
    case OPEN_SIDEBAR:
      // Return a new state object with the sidebar open
      return {
        ...state, // Spread the current state to avoid mutation
        isSidebarOpen: true, // Update the isSidebarOpen property to true
      };

    // When the action type is CLOSE_SIDEBAR
    case CLOSE_SIDEBAR:
      // Return a new state object with the sidebar closed
      return {
        ...state, // Spread the current state to avoid mutation
        isSidebarOpen: false, // Update the isSidebarOpen property to false
      };

    // Default case for unhandled action types
    default:
      // Return the current state without any changes
      return state;
  }
};

// Export the sidebarReducer function
export default sidebarReducer;

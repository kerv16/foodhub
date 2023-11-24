import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, MealDetails, Error, Category } from "./pages/index";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      {/* Render the header component */}
      <Header />
      {/* Render the sidebar component */}
      <Sidebar />
      <Routes>
        {/* Define the routes for different pages */}
        <Route path="/" element={<Home />} /> {/* Route for the home page */}
        <Route path="/meal/:id" element={<MealDetails />} /> {/* Route for meal details page */}
        <Route path="/meal/category/:name" element={<Category />} /> {/* Route for category page */}
        <Route path="*" element={<Error />} /> {/* Route for error page when no matching route is found */}
      </Routes>
    </Router>
  );
}

export default App;

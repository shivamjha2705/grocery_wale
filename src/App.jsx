// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode was previously enabled from localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      // Save the mode to localStorage
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Dark mode toggle button at the bottom */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg"
        >
          {isDarkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
        </button>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

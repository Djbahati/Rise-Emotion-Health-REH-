import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  RISE
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
                  About
                </Link>
                <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
                  Contact
                </Link>
                <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700">
                  Sign Up
                </button>
                <button className="px-4 py-2 text-sm font-medium text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-gray-800">
                  Log In
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 dark:text-gray-400"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Contact
                </Link>
                <button className="w-full text-left px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700">
                  Sign Up
                </button>
                <button className="w-full text-left px-3 py-2 text-sm font-medium text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-gray-800">
                  Log In
                </button>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
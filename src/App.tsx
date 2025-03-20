import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
// import { Home, Users, Posts, Comments, Login, Register, NumberOperations } from './components';
import { UserCircle, LogOut } from 'lucide-react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex space-x-4 items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <UserCircle className="h-8 w-8 text-blue-600" />
                  <span className="font-bold text-xl">Social App</span>
                </Link>
              </div>
              <div className="flex space-x-4 items-center">
                {isLoggedIn ? (
                  <>
                    {/* <Link to="/users" className="text-gray-700 hover:text-blue-600">Users</Link>
                    <Link to="/posts" className="text-gray-700 hover:text-blue-600">Posts</Link>
                    <Link to="/comments" className="text-gray-700 hover:text-blue-600">Comments</Link>
                    <Link to="/numbers" className="text-gray-700 hover:text-blue-600">Numbers</Link> */}
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-1 text-gray-700 hover:text-red-600"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                    <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/users" element={isLoggedIn ? <Users /> : <Navigate to="/login" />} />
            <Route path="/posts" element={isLoggedIn ? <Posts /> : <Navigate to="/login" />} />
            <Route path="/comments" element={isLoggedIn ? <Comments /> : <Navigate to="/login" />} />
            <Route path="/numbers" element={isLoggedIn ? <NumberOperations /> : <Navigate to="/login" />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
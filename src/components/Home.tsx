import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = localStorage.getItem('token');

  if (!isLoggedIn) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Social Media App</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
          <Link to="/login" className="bg-blue-600 text-white p-6 rounded-lg shadow-md hover:bg-blue-700 transition">
            <h2 className="text-2xl font-semibold mb-2">Login</h2>
            <p className="text-gray-100">Already have an account? Sign in</p>
          </Link>
          <Link to="/register" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Register</h2>
            <p className="text-gray-600">New here? Create an account</p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Your Social Feed</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/users" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Users</h2>
          <p className="text-gray-600">View all users in the platform</p>
        </Link>
        <Link to="/posts" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Posts</h2>
          <p className="text-gray-600">Browse through user posts</p>
        </Link>
        <Link to="/comments" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Comments</h2>
          <p className="text-gray-600">Read post comments</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
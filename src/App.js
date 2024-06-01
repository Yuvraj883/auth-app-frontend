import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
// import Home from './components/Home'; // Assume you have a Home component

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm/>} />
      {/* <Route path="/login" element={<LoginForm />} /> */}
      {/* Add other routes as needed */}
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
export default App;

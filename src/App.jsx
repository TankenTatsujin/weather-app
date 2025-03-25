import React from 'react';
import Weather from './components/Weather';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <Weather />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;

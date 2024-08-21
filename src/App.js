import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import About from './About.js';

// const App = () => (
//   <div>
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/about" element={<About />}></Route>
//     </Routes>
//   </div>
// );

export default function App()
{
  console.log('use  server')
  return <div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  </div>
}

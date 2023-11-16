
import './App.css';
import './post.css'
import React from 'react';
import Home from './Home';
import React_api from './React_api';
import About from './about';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
         <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/React_api" Component={React_api} />
        <Route exact path="/about" Component={About} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
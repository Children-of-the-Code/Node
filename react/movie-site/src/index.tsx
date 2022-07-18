import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoviePage } from './pages/MoviePage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AddMoviePage } from './pages/AddMoviePage';
import { Navbar } from './components/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// context allows us to pass props down to many different components, useful for things that rarely change
// like the currently logged in user, dark/light mode, etc

root.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar></Navbar>
      <Routes>
        
        <Route path="add" element={<AddMoviePage/>}></Route>
        {/* the wildcard route will reroute all urls except for explicitly defined routes to this one */}
        <Route path = "*" element={<MoviePage lightMode = {true}/>}>
        </Route>
        
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

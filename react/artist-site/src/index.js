import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ArtistList } from './pages/ArtistList';
import reportWebVitals from './reportWebVitals';
import { Navbar } from './components/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AddArtist } from './pages/AddArtist';
import { AddPainting } from './pages/AddPainting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <div>
        {/* a navbar that exists independently of any routes and does not need to be rerendered */}
        <Navbar></Navbar>
        {/* my set of routes that we will swap between */}
        <Routes>
          {/* each route needs a path and the element (page component) that it will load */}
          <Route path="/ArtistList" element = {<ArtistList/>}/>
          <Route path="/AddArtist" element = {<AddArtist/>}/>
          <Route path="/AddPainting" element = {<AddPainting/>}/>
        </Routes>
      </div>
    </HashRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

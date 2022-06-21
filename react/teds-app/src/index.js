import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// IMPORT YOUR COMPONENTS!!!!
import { InfoCard } from './components/InfoCard';
import { DirectorList } from './components/DirectorList';
import { AddDirectorButton } from './components/AddDirectorButton';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AddDirectorButton></AddDirectorButton>
    <div className = "row">
    <DirectorList/>
    </div>
    
  </React.StrictMode>
);
/*root.render(
  <React.StrictMode>
    
    <div className = "row">
    <InfoCard title="info 1" info="informative infocard 1"/>
    <InfoCard title="info 2" info="informative infocard 2"/>
    <InfoCard title="info 3" info="informative infocard 3"/>
    <InfoCard title="info 4" info="informative infocard 4"/>
    </div>
    
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

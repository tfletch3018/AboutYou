import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from "./pages/home";
import YourWork from "./pages/yourWork";
import Misc from "./pages/misc";
import Project1 from './pages/project1';
import Project2 from './pages/project2';
import Project3 from './pages/project3';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <HashRouter>



    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />}/>
        <Route path="yourWork" element={<YourWork />} />
          <Route path="misc" element={<Misc />} />
          <Route path="yourWork/projectOne" element={<Project1 />} />
          <Route path="yourWork/projectTwo" element={<Project2 />} />
          <Route path="yourWork/projectThree" element={<Project3 />} />

      </Route>
    </Routes>
    
  </HashRouter>
);
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Bio from './pages/about/Bio';
import Contact from './pages/about/Contact';
import Resume from './pages/about/Resume';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Portfolio from './pages/Portfolio'
import Header from './header/Header';
import '../style/styles.css';
import ProjectPage from './pages/ProjectPage';
import Footer from './footer/Footer';


function App() {


  return (
    <div className='main-container'>
      <div className='nav-fixed'><Header /></div>
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/:pageUrl" element={<ProjectPage />} />
        </Routes>
      </div>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Bio from './pages/about/Bio';
import Contact from './pages/about/Contact';
import Resume from './pages/about/Resume';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Portfolio from './pages/Portfolio'
import Header from './header/Header';
import '../style/styles.css'
import ProjectPage from './pages/ProjectPage';


function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:pageUrl" element={<ProjectPage />} />
        
        </Routes>
      </div>
    </>
  );
}

export default App;

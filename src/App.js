import './style.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './contact';
import AboutMe from './aboutme';
import Resume from './resume';
import NavBar from './NavBar';
import Project from './myproject';
import Footer from './footer';

let bio = "My name is PHON KAKADA. I am Studying at Royal University Of Phnom Penh."

const App = () => {
  return (
    <>
      <div className='mainApp'>
        <NavBar />
        <Routes>
          <Route path='/my-info' element={<AboutMe />}></Route>
          <Route path='*' element={<AboutMe />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}


export default App;
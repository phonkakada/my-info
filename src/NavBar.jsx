import React from "react";
import './style.css'
import { Link } from "react-router-dom";

let buttonClick = false
const NavBar = () => {
  return (
    <>
      <div className='NavBar'>
        <div className='name-position'>
          <a href='/' className='Name'><h4>Phon Kakada<span> / Junior Developer</span> </h4> </a>
        </div>
        <button className="bi bi-list fa-2x" id="buttonNavBar" onClick={DisplayRightBar}></button>
        <div className='menu'>
          <Link to='/' className='menu-items'>About Me</Link>
          <Link to='/resume' className='menu-items'>Resume</Link>
          <Link to='/project' className='menu-items'>Project</Link>
          <Link to='/contact' className='menu-items'>Contact</Link>
        </div>
        <ListMenu />
      </div>
    </>
  )
}

const ListMenu = () => {
  return (
    <>
      <div className="right-bar" id="right">
        <p className="right-bar-items"><Link to= "/">Home</Link></p>
        <div className="line-right-bar"></div>
        <p className="right-bar-items"><Link to="/resume">Resume</Link></p>
        <div className="line-right-bar"></div>
        <p className="right-bar-items"><Link to="/project">Project</Link></p>
        <div className="line-right-bar"></div>
        <p className="right-bar-items"><Link to="contact">Contact</Link></p>

      </div>
    </>
  )
};
const DisplayRightBar = () => {
  const RightBar = document.getElementById("right")
  if (RightBar){
    if (RightBar.style.display === "none"){
      RightBar.style.display = "block";
    }else{
      RightBar.style.display = "none";
    }
  }
}

export default NavBar;
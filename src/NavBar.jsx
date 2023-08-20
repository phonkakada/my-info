import React from "react";
import './style.css'
import { Link } from "react-router-dom";

let buttonClick = false
const NavBar = () =>{
    return (
      <>
      <div className='NavBar'>
          <div className='name-position'>
            <a href='/' className='Name'>Phon Kakada<span> / Junior Developer</span> </a>
          </div>
          <button className="bi bi-list fa-2x" id="buttonNavBar"></button>
          <div className='menu'>
            <Link to='/' className='menu-items'>About Me</Link>
            <Link to='/resume' className='menu-items'>Resume</Link>
            <Link to='/project' className='menu-items'>Project</Link>
            <Link to='/contact' className='menu-items'>Contact</Link>
          </div>
      </div>
      <ListMenu />
      </>
    )
  }

  const ListMenu = () => {
    return (
      <>
      <div className="container">
      <center>
        <div id="mylist">
        <Link to="/" className="list-item">About Me</Link><br></br>
        <Link to="/resume" className="list-item">Resume</Link><br></br>
        <Link to="/project" className="list-item">Projects</Link><br></br>
        <Link to="/contact" className="list-item">Contact</Link><br></br>
        </div>
        </center>
      </div>
      </>
    )
  }

  const listmenu = document.getElementById("mylist");
  if (listmenu){
    listmenu.addEventListener('click' , ()=>{
      alert(listmenu.style.display)
    })
  }
export default NavBar;
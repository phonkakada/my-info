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
          <div id="list-content">
          <p><Link to="/" className="list-item">About Me</Link></p>
          <p><Link to="/resume" className="list-item">Resume</Link></p>
          <p><Link to="/project" className="list-item">Projects</Link></p>
          <p><Link to="/contact" className="list-item">Contact</Link></p>
          </div>
        </div>
        </center>
      </div>
      </>
    )
  }

  const listmenu = document.getElementById("buttonNavBar");
  const list_items = document.getElementById("list-content")
  if (listmenu){ 
    listmenu.addEventListener('mouseover' , ()=>{
      document.getElementById("mylist").style.width = "100%" 
      document.getElementById("mylist").style.marginRight = "-20%" 
    })
    list_items.addEventListener("mouseover", () => {
      document.getElementById("mylist").style.width = "100%" 
      document.getElementById("mylist").style.marginRight = "-20%" 
    })
    listmenu.addEventListener('mouseout' , ()=>{
      document.getElementById("mylist").style.width = "0%" 
    })
    list_items.addEventListener('mouseout' ,() => {
      document.getElementById("mylist").style.width = "0%" 

    })
    listmenu.addEventListener('click' , ()=>{
      if (      document.getElementById("mylist").style.width == "0%"){
        document.getElementById("mylist").style.width = "100%" 
        document.getElementById("mylist").style.marginRight = "-20%" 
      }else{
        document.getElementById("mylist").style.width = "0%";
      }
    })
  }
export default NavBar;
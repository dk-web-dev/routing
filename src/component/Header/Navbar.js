import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
   return(
       <>
       <nav className="navbar navbar-expand-sm bg-light">

        <ul className="navbar-nav">
        <li className="nav-item">
           <NavLink exact to="/" activeClassName="active_css" 
                          className="nav-link" >Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink exact to="/Service" activeClassName="active_css"
                          className="nav-link" >Service</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/Useparam" activeClassName="active_css"
                           className="nav-link" >Useparam</NavLink>
        
        </li>
        <li className="nav-item">
            <NavLink exact to="/About" activeClassName="active_css"
                           className="nav-link" >About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/Contact" activeClassName="active_css"
                           className="nav-link" >Contact</NavLink>
        </li>

        <li className="nav-item">
            <NavLink exact to="/Search" activeClassName="active_css"
                           className="nav-link" >Search</NavLink>
        </li>
        
        <li className="nav-item">
            <NavLink exact to="/Scss" activeClassName="active_css"
                           className="nav-link" >Scss/Sass</NavLink>
        </li>
        </ul>
       </nav>


       </>
   )
}

export default Navbar;




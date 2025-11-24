import React from 'react';
import './sidebar.css';
import Icon from "../assets/sidebar-ring.svg"
import { AiFillHome } from "react-icons/ai";
import { BiNotepad, BiTimeFive, BiParty } from "react-icons/bi";
import { ImAirplane } from "react-icons/im";
import { NavLink, useLocation } from 'react-router-dom';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';

/**
 * TODO: refactor sidebar's style.
 * MAYBE: put all of sidebar into 
 */

function Sidebar({children, sidebarOpen, setSidebarOpen}) {
  const menuItem = [
    {
      path:"/",
      name:"Home",
      icon:<AiFillHome size={28}/>
    },
    {
      path:"/rsvp",
      name:"RSVP",
      icon:<BiNotepad size={28}/>
    },
    {
      path:"/timeline",
      name:"Timeline",
      icon:<BiTimeFive size={28}/>
    },
    {
      path:"/travel",
      name:"Travel",
      icon:<ImAirplane size={28}/>
    },
    {
      path:"/weddingParty",
      name:"Party",
      icon:<BiParty size={30}/>
    }
  ];

  function handleMenuClick() {
    setSidebarOpen(!sidebarOpen)
  }

  const location = useLocation(); // Get the current location object from the router

  return (
    <div className="container">
      <Fade in={sidebarOpen}>
        <div className="sidebar-open-dark-filter" onClick={handleMenuClick} />
      </Fade>
      <div className="menu-container" onClick={handleMenuClick}>
        <img src={Icon} alt="ring-icon" width={50} height={35} />
        <div className="menu-txt">Menu</div>
      </div> 
      <Slide direction="right" in={sidebarOpen} mountOnEnter unmountOnExit>
        <div className="sidebar">
          <div className="links-container">
            {menuItem.map((item, index)=>(
              <NavLink 
                to={item.path} 
                key={index} 
                className={location.pathname === item.path ? "active-link" : "link"}
                onClick={handleMenuClick}
              >
                <div className="icon">{item.icon}</div>
                <div className="link-text">{item.name}</div>
              </NavLink>
            ))}
          </div>
        </div>
      </Slide>
      {children}
    </div>
  );
};

export default Sidebar;

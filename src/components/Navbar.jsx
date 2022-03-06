import React, { useState } from "react";
import logo from "../images/docker-docs.svg";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import smallIcon from "../images/docker-icon.svg";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar(props){

    function openMenu(event){
        props.changeMenu();
        event.preventDefault();
    }

    return (
        <div>
            <nav className="navbar">
                <a className="desktop navbar-logo" href=" "><img src={logo} alt="logo"/></a>
                <a className="mobile mobile-navbar-logo" href=" "><img src={smallIcon} alt="logo"/></a>
             
                <div className="search-box-div">
                <SearchIcon className="search-icon"/>
                <input className="search-box" typeof="search" placeholder="Search the docs"></input>
                
                </div>

                <div className="mobile menu-icon">
                <MenuIcon onClick={openMenu} />
                </div>
    
                <ul>
                    <li><a href=" ">Home</a></li>
                    <li><a href=" " class="active">Guides</a></li>
                    <li><a href=" ">Manuals</a></li>
                    <li><a href=" ">Reference</a></li>
                    <li><a href=" ">Samples</a></li>
                </ul>
            </nav>
            <div className="navbar-page-loc">
                <p><HomeIcon className="home-icon"/> &nbsp; / &nbsp; Guides &nbsp; / &nbsp; Doc Overview</p>
            </div>
        </div>
    )
}

export default Navbar;
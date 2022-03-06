import { Collapse } from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Sidebar(props) {

    const [visibility, setVisibility] = useState("none");

    function showItems(event) {

        if (visibility==="none"){
            setVisibility("block");
        }else{
            setVisibility("none");
        }
        event.preventDefault();
       
    }



    return (
        
        <div className="side-bar" style={{display: props.menu}}>
            <ul>
                <li><a className="active" href=" ">Docker Overview</a></li>
                <li><a href=" ">Get Docker</a></li>
                <li id="Get Started" onClick={showItems}><a href=" ">Get Started <span style={{float: "right"}}><ArrowDropDownIcon /></span></a>
                    <ul style={{display: visibility}}>
                        <li></li>
                        <li><a href=" ">Part 1</a></li>
                        <li><a href=" ">Part 2</a></li>
                    </ul>
                </li>
                <li><a href=" ">Language Specific Guides</a>
                </li>
                <li><a href=" ">Develop with Docker</a></li>
                <li><a href=" ">Set Up CI/CD</a></li>
                <li><a href=" ">Deploy your app to cloud</a></li>
                <li><a href=" ">Run your app in production</a></li>
            </ul>
        </div>
        
    );
}

export default Sidebar;
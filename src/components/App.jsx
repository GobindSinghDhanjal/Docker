import React, { useState } from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App(){

    const[menu, setMenu] = useState("block");


    function changeMenu(event){
        if(menu==="none"){
            setMenu("block");
        }else{
            setMenu("none");
        }
        event.preventDefault();
    }

    return (
        <div>
            <Navbar changeMenu={changeMenu} />
            <Sidebar menu={menu}/>
            <Content />
    
            
        </div>
    );
}

export default App;
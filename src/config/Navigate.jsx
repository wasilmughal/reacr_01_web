

import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../component/Home";
import About from "../component/About";
import Service from "../component/Service";
import Gallery from "../component/Gallery";
import Contact from "../component/Contact";

class Navigate extends React.Component{

render(){
    return(
        <>
        
        <Routes>

<Route path="/" element={<Home/>}></Route>
<Route path="/About" element={<About/>}></Route>
<Route path="/Service" element={<Service/>}></Route>
<Route path="/Gallery" element={<Gallery/>}></Route>
<Route path="/Contact" element={<Contact/>}></Route>












        </Routes>
        
        
        
        
        
        </>
    )
}
}export default  Navigate 
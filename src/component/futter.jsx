import React from "react";
import {FaFacebook} from 'react-icons/fa';
import {BsWhatsapp } from 'react-icons/bs';
import { GrInstagram} from 'react-icons/gr';
import {GrYoutube } from 'react-icons/gr';
import {BsTwitter } from 'react-icons/bs';


class Futter extends React.Component{
    render(){
        return(
            <div style={{}}>
                <br />
                <hr />
            <i style={{fontSize:"20px",color:"blue",marginRight:"20px"}}>  <FaFacebook/></i>
            <i style={{fontSize:"20px",color:"green" ,marginRight:"20px"}}>  <BsWhatsapp/></i>
            <i style={{fontSize:"20px" ,color:"orange" ,marginRight:"20px"}}>  <GrInstagram/></i>
            <i style={{fontSize:"25px",color:"red" ,marginRight:"20px"}}>  <GrYoutube/> </i>
            <i style={{fontSize:"20px",color:"blue" ,marginRight:"20px"}}>  < BsTwitter/> </i>
            
            </div>
        )
    }
}export default  Futter
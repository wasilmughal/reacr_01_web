import React from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import {AiOutlineAntDesign } from 'react-icons/ai';
import {TbHexagonLetterE } from 'react-icons/tb';
import {TbLetterW } from 'react-icons/tb';
import {TbLetterR } from 'react-icons/tb';
import {TbLetterL } from 'react-icons/tb';
import {TbLetterH } from 'react-icons/tb';
import {TbLetterE } from 'react-icons/tb';
import {TbLetterS } from 'react-icons/tb';







import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const HighOrderFunc = (Comp) => {
    const forwordRes = React.forwardRef((props, ref) => {
        const nav = useNavigate()
        return <Comp {...props} nav={nav} ref={ref} />
    })
    return forwordRes
}

class Home extends React.Component{


    Go_to_Login = () => {
        this.props.nav("/Login", {replace: false}  )
    }

    Go_to_Sign = () => {
        this.props.nav("/Signup", {replace: false} )
    }

    Go_to_Service = () => {
        this.props.nav("/Service", {replace: false} )
    }




    render(){
        return(
            <div style={{position:"fixed",top:"0px" ,width:"100%",zIndex:"1"}}>
              
<Navbar bg="dark" expand="lg">

      <Container>
      <i style={{color:"gold",fontSize:"40px"}}> <AiOutlineAntDesign/></i>

      <Navbar.Brand style={{fontSize:"25px" ,color:"white"}}> <TbLetterW/><TbLetterH/><TbHexagonLetterE/><TbHexagonLetterE/><TbLetterL/><TbLetterE/><TbLetterR/><TbLetterS/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="#home"  ><Link to="/" style={{textDecoration:"none" ,color:"white",fontSize:"15px"}} > Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/About" style={{textDecoration:"none" ,color:"white",fontSize:"15px"}} > About</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Gallery" style={{textDecoration:"none" ,color:"white",fontSize:"15px"}} > Gallery</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/service"style={{textDecoration:"none" ,color:"white",fontSize:"15px"}} > service</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Contact" style={{textDecoration:"none" ,color:"white",fontSize:"15px"}}> ContactUs</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 


            
            
            
            
            
            
           
            </div>
        )
    }
}export default  HighOrderFunc(Home)



import React from "react";


import Carousel from 'react-bootstrap/Carousel';
import img01 from "../Assets/pic01.jpg"
// import img02 from "../Assets/pic02.jpg"
import img03 from "../Assets/pic03.jpg"

import img04 from "../Assets/pic04.jpg"

import 'bootstrap/dist/css/bootstrap.min.css';

import img001 from "../Assets/images (3).jpg"

import img002 from "../Assets/man-fixing-motorcycle-modern-workshop.jpg"
import img003 from "../Assets/download.jpg"
import img004 from "../Assets/images.jpg"

import img05 from "../Assets/istockphoto-1051029946-170667a.jpg"
import img06 from "../Assets/istockphoto-614415432-612x612.jpg"


import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from "../Assets/download-removebg-preview.png"

import {GiCartwheel} from 'react-icons/gi';


class Home extends React.Component{


    render(){
        return(
            <div style={{marginTop:"50px"}}>
            
           
            
            {/* slider start */}

            <Carousel>
      <Carousel.Item style={{minHeight:"500px",marginTop:"0px" ,objectFit:"contain"}}>
        <img
        style={{height:"480px" ,width:"100%"}}
          className="d-block w-100"
          src={img01}
          alt="First slide"
        />
        
      </Carousel.Item>

      <Carousel.Item  style={{minHeight:"500px"}}> 
        <img
        style={{height:"480px",width:"100%"}}
          className="d-block w-100"
          src={img03}
          alt="Second slide"
        />

        
      </Carousel.Item>

      <Carousel.Item   style={{minHeight:"500px"}}>
        <img
        style={{height:"480px",width:"100%"}}
          className="d-block w-100"
          src={img04}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>

<br />
<div >
<h1 style={{color:"blue"}}>Sport Bike <i><GiCartwheel/></i></h1>

 <p style={{display:"flex",alignItems:"center",color:""}}>
 
  <img src={logo} alt="..." style={{width:"250px",height:"150px",color:"blue"}} />
  A sport bike, also known as a "sportbike" or "superbike," is a type of motorcycle designed for high-performance riding on paved roads or race tracks. Sport bikes are characterized by their sleek and aerodynamic designs, powerful engines, and advanced suspension systems, which allow them to accelerate quickly and handle corners at high speeds. They are often associated with racing and require skill and experience to operate safely. Sport bikes typically have a more aggressive riding position than other types of motorcycles, with the rider leaning forward and gripping low-mounted handlebars. They are popular among enthusiasts who seek adrenaline-fueled thrills and the thrill of speed. Despite their speed and power, sport bikes can also be used for daily commuting and leisurely weekend rides

</p>

</div>
<br /><br />

<Container>
<Row>
<Col>
<Card style={{ width: '300px' }}>
  <Card.Img variant="top" src={img001} />
 
</Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
  <Card.Img variant="top" src={img002} />
 
</Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
  <Card.Img variant="top" src={img003} />
 
</Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
  <Card.Img variant="top" src={img004} />
 
</Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
  <Card.Img variant="top" src={img05} />
 
</Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
  <Card.Img variant="top" src={img06} />
 
</Card>

</Col>





</Row>

        </Container>

            
        
            
            </div>
        )
    }
}export default Home


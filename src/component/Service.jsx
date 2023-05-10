import React from "react";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img01 from "../Assets/images (3).jpg"

import img02 from "../Assets/man-fixing-motorcycle-modern-workshop.jpg"
import img03 from "../Assets/download.jpg"
import img04 from "../Assets/images.jpg"

import img05 from "../Assets/istockphoto-1051029946-170667a.jpg"
import img06 from "../Assets/istockphoto-614415432-612x612.jpg"



class Service extends React.Component{


    render(){
        return(
            <div style={{marginTop:"50px"}}>
            <br />
            <br />
            <Container>
<Row>
<Col>
<Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={img01} />
     
    </Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={img02} />
     
    </Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={img03} />
     
    </Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={img04} />
     
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
}export default Service


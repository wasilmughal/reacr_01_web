import React from "react";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img01 from "../Assets/pic01.jpg"
import img02 from "../Assets/pic02.jpg"
import img03 from "../Assets/pic03.jpg"
import img04 from "../Assets/pic04.jpg"
import img05 from "../Assets/pic06 (1).jpg"
import img06 from "../Assets/pic06 (2).jpg"
import img07 from "../Assets/pic06 (3).jpg"
import img08 from "../Assets/pic06 (4).jpg"
import img09 from "../Assets/pic06 (5).jpg"
import img10 from "../Assets/pic06 (7).jpg"
import img11 from "../Assets/pic06 (8).jpg"
import img12 from "../Assets/pic06 (9).jpg"




class Gallery extends React.Component{


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

<Col>
<Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={img07} />
     
    </Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={img08} />
     
    </Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={img09} />
     
    </Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={img10} />
     
    </Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={img11} />
     
    </Card>

</Col>

<Col>
<Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={img12} />
     
    </Card>

</Col>



</Row>

            </Container>




            
            
            </div>
        )
    }
}export default Gallery 


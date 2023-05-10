import React from "react";
import { Formik,Form, Field,ErrorMessage } from "formik"
import * as Yup from 'yup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';



class Contact extends React.Component{


    render(){
        return(
            <div style={{marginTop:"50px"}}>
          <br />
          <br />
          <br />
          <br />

            <Container>
      <Row>
        <Col>
        
   <div>
   <Formik
        initialValues={{
          name :"",
        fname:"",
        contact:"",
        addres:""
      }} //inital value start 
      
        validationSchema={Yup.object({
            firstName:Yup.string().min(10,"min lettr 10").required(),
            email:Yup.string().email("Invalid email address").required()
        }) }
        onSubmit={(value)=>{
            console.log(value)
        }}
        >
            <Form style={{textAlign:"center" ,border:"3px solid black",width:"400px", height:"300px"}}>
<br />
<br />

<h2 style={{color:"lightcoral"}}>Give your information !</h2>
<br />
              <label htmlFor="">Name  :</label>
              
                <Field name={"name"} style={{width:"50%"}}/>
                <br/>

                <ErrorMessage name={"name"}/>
                <br/>
                <label htmlFor="">Fname  :</label>

                <Field name={"fname"} style={{width:"50%"}}/>
                <br/>

                <ErrorMessage name={"fname"}/>
                
                <br/>
                <label htmlFor="">Contact  :</label>

                <Field name={"comtact"} style={{width:"50%"}}/>
                <br/>
                <ErrorMessage name={"contact"}/>
                <br/>
                <label htmlFor="">Addres  :</label>

                <Field name={"addres"} style={{width:"50%"}}/>
                <br/>
                <ErrorMessage name={"addres"}/>
                <br/>
                <button type="submit" style={{backgroundColor:"blue",color:"white"}}>Submit</button>
<br />
            </Form>

        </Formik>

   </div>

        </Col>
              <Col>

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14416.854808272847!2d68.3642777!3d25.3976563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71b4e570aba5%3A0x44ff37858d6da3f3!2sSMIT%20Hyderabad!5e0!3m2!1sen!2s!4v1683646615099!5m2!1sen!2s" width="400px" height="300px" style={{ allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </Col>
      </Row>
      </Container>

            
           


           
            
            
            </div>
        )
    }
}export default Contact


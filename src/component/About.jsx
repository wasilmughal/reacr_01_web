import React from "react";
import './About.css'
import immabout from "../Assets/pic05.PNG"
import {AiOutlineAntDesign } from 'react-icons/ai';
import {TbHexagonLetterE } from 'react-icons/tb';
import {TbLetterW } from 'react-icons/tb';
import {TbLetterR } from 'react-icons/tb';
import {TbLetterL } from 'react-icons/tb';
import {TbLetterH } from 'react-icons/tb';
import {TbLetterE } from 'react-icons/tb';
import {TbLetterS } from 'react-icons/tb';
import {RiTeamLine } from 'react-icons/ri';





class About extends React.Component{


    render(){
        return(
            <div style={{marginTop:"50px"}}>
            
            <br />
            <br />
            <br />
           <div  id="div">
           <div  >
        <h1>Welcome to my website!</h1>
        <p>Here you can find information about my life.</p>

        <p style={{display:"flex",alignItems:"center"}}>
           <img src={immabout} alt="" style={{borderRadius:"30px 30px" ,width:"200px",marginRight:"0px"}} />
            <span>   Asalamoalikum am Wasil Mughal from hyderabad pakistan i study in SMIT and  allhamdolillah
                nad Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero asperiores, ad eveniet rerum saepe illum quos reiciendis maiores dignissimos ipsam deserunt eos commodi tempora hic fugit ex, iure et. Quidem nisi deserunt reiciendis fuga soluta similique aliquid officia maiores ipsam cupiditate reprehenderit numquam excepturi fugiat rerum ad dolores sapiente doloremque molestiae asperiores, nam, cum consequuntur odit? Tenetur, animi! In, nulla omnis dolores dolore libero numquam consequatur voluptate hic! Ea earum dolorem odio eius debitis repudiandae nesciunt quia ratione ut! Maxime, dolore suscipit rem blanditiis 
                aliquid eaque ratione reiciendis sed voluptate soluta veritatis alias eligendi, architecto dolor, vero totam est in!

                </span> 

           </p>   <br /><br /> <br />
           <h1 style={{fontSize:"40px",color:"green"}}> About My team  <RiTeamLine/> !</h1>
           <p>
           We are a passionate team of cycling enthusiasts who believe that bikes have the power to transform lives and communities. Our mission is to provide high-quality bikes that not only deliver exceptional performance, but also inspire people to get out and explore the world on two wheels.

At our company, we pride ourselves on using the latest technology and design innovations to create bikes that are not only fast and efficient, but also comfortable and easy to ride. Whether you're a seasoned pro or a beginner, we have a bike that will meet your needs and exceed your expectations.

But our commitment to cycling goes beyond just selling bikes. We also believe in promoting a healthy and sustainable lifestyle, and we strive to be good stewards of the environment. That's why we use eco-friendly materials in our bikes and packaging, and why we support initiatives that encourage people to ride their bikes more and drive their cars less.

We also believe in giving back to the cycling community. That's why we partner with local cycling organizations and sponsor events that promote cycling as a sport and a means of transportation. We believe that by working together, we can make cycling safer, more accessible, and more fun for everyone.

Thank you for considering our company for your cycling needs. We hope that our passion for cycling and our commitment to quality and sustainability will inspire you to join us on this exciting journey.
           </p>
<br />
<h1>
<i style={{color:"gold",fontSize:"40px"}}> <AiOutlineAntDesign/></i>

<TbLetterW/><TbLetterH/><TbHexagonLetterE/><TbHexagonLetterE/><TbLetterL/><TbLetterE/><TbLetterR/><TbLetterS/>
</h1>



           
      </div >
           </div>
          

     

      </div>
        )
    }
}export default About


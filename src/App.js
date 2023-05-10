import Hader from './component/Hader';
import Navigate from './config/Navigate';


import {FaFacebook} from 'react-icons/fa';
import {BsWhatsapp } from 'react-icons/bs';
import { GrInstagram} from 'react-icons/gr';
import {GrYoutube } from 'react-icons/gr';
import {BsTwitter } from 'react-icons/bs';


function App() {
  return (
    <div style={{backgroundcolor:""}}>
    <Hader/>
    <Navigate/>

    <hr/>

            <i style={{fontSize:"15px",color:"blue",marginRight:"20px"}}>  <FaFacebook/></i>
            <i style={{fontSize:"15px",color:"green" ,marginRight:"20px"}}>  <BsWhatsapp/></i>
            <i style={{fontSize:"15px" ,color:"orange" ,marginRight:"20px"}}>  <GrInstagram/></i>
            <i style={{fontSize:"18px",color:"red" ,marginRight:"20px"}}>  <GrYoutube/> </i>
            <i style={{fontSize:"15px",color:"blue" ,marginRight:"20px"}}>  < BsTwitter/> </i>
            
   

   <br/>
   <br/>
  <h6>Create by Wasil Mughal !</h6>
    </div>
  );
}

export default App;

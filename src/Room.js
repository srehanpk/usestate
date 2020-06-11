import React, { useState } from "react";
import './App.css';




const Room =({image1, image2})=>{

    let [isLit, setLit] = useState(true);
    const bright = isLit ? "lit" : "dark";

     
   
    const on = () =>{
        setLit (true);

    }
    const off = () =>{
        setLit (false);
    }

    
return (

 <div className={`room ${bright}`}> 


<br/><br/>


<h1>Bulb is {isLit? 'ON' : 'OFF'}</h1>

<br/><br/>


<button onClick={on} >ON</button>
<button onClick={off}>OFF</button>
        
        

</div>

)}


export default Room;
import React, {useState} from 'react';
import './App.css';




const Temp = () => {


    let [temp, setTemp] = useState(22);

    let updateTemp = temp;


    const tup = () =>{
        setTemp (++temp);
    }
    const tdown = () =>{
        setTemp (--temp);
    }


    return (

        <div className="temp">

<br/><br/>


           <h2>Temperature <span>{updateTemp}</span> Celsius</h2>
           <br/>

            <button onClick={tup} >Up</button>
            <button onClick={tdown}>Down</button>

        </div>

    )
}



export default Temp;
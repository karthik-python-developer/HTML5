import React from "react";
import { useState  } from "react";

function Events1(){

    let  [name,setName]=useState("");

    function change(events)
    {
         setName(events.target.value)  
    }
    return(
        <div>
           <h1> hi {name}!, this is rocky </h1>
           <input type="text" name ="name" id="name" onChange={change} value={name} />
           
        </div>
    )
}

export default Events1;
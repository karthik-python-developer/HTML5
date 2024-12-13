import React from "react";
import { useState  } from "react";

function Events(){

    let  [name,setName]=useState(" ")

    function click()
    {
            // setName ("karthi")
            let name = document.getElementById("name").value
            setName(name)
    }
    return(
        <div>
            <h1> hi {name}!, this is rocky </h1>
            <input type="text" name ="name" id="name"/>
            <button onClick={click}> click me </button>
        </div>
    )
}

export default Events;
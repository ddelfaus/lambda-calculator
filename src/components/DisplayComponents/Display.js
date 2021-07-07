import React from "react";
import {useState} from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers"

const Display = (props) => {


  console.log(props);

  return (<div className="display">{/* Display any props data here */}
    
  {props.data}

   
    </div>
  )
};


export default Display;
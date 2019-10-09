import React from "react";


const NumberButton = props => {

 console.log("wafa",props.changeData)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    
      <button className = "numberButton" onClick ={() => props.changeData(props.button)}>
        <span  aria-label ="number">
          {props.button}
        
        </span>
      
      </button>
   
    </>
  );
};

export default NumberButton;
import React from "react";

const person = (props) => {
  return (
    <div>
    {props.name} :  {props.individualFine} <br />
  <button onClick={props.addIndividualFine}>Add</button>
    <button onClick={props.subIndividualFine}>Sub</button>
     <br/> <br/>
    </div>
  )
};

export default person;

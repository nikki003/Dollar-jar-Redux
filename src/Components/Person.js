import React from "react";
import { connect } from "react-redux";

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

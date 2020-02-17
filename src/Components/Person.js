import React from "react";
import { connect } from "react-redux";
import { addFine, subFine } from "../Redux/Actions";

const person = ({ user, addFine, subFine }) => {
  return (
    <div>
    {user.name} :  {user.individualFine} <br />
    <button onClick={() => addFine(user.id)}>Add</button>
    <button onClick={() => subFine(user.id)}>Sub</button>
     <br/> <br/>
    </div>
  )
};

export default connect(
  null,
  { addFine, subFine }
)(person);

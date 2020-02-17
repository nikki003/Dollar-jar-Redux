import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "./Person";
// import state from "../Redux/Reducers/AddPerson";

export class PersonList extends Component {
  constructor(props){
    super(props);

  }

  render() {
    console.log("props person",this.props.fake);
    return (
      <div>
      <h4>Hi Nikki</h4>
        {

        //   this.props.persons.map((user) => (
        //     <Person
        //       name={user.name}
        //       individualFine={user.individualFine}
        //       />
        //   )
        // )
      }
      </div>
    )
  }

}

// const personList = (state) => {state.persons.map(user => {
//     return (
//       <Person
//         name={user.name}
//         individualFine={user.individualFine}
//         />
//     )
//   }
// )
// }

function mapStateToProps(state) {
  return {
    fake: state.persons
  }
}


export default connect(mapStateToProps)(PersonList);

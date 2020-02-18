import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "./Person";
import { addIndividualFine } from "../Redux/Actions";
import { subIndividualFine } from "../Redux/Actions";
import { calculateTotalFine } from "../Redux/Actions"
// import state from "../Redux/Reducers/AddPerson";

export class PersonList extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <h3>Total :  {this.props.totalFine}</h3>
        {
          this.props.persons.map((user) =>
            <Person
              name={user.name}
              individualFine={user.individualFine}
              addIndividualFine={() => {
                this.props.addIndividualFine(user.id)
                this.props.calculateTotalFine()
              }}
              subIndividualFine={() => {
                this.props.subIndividualFine(user.id)
                this.props.calculateTotalFine()
              }}
              />
        )
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
    persons: state.AddPerson.persons,
    totalFine: state.AddPerson.totalFine
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addIndividualFine: (id) => dispatch(addIndividualFine(id)),
    subIndividualFine: (id) => dispatch(subIndividualFine(id)),
    calculateTotalFine: () => dispatch(calculateTotalFine())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);

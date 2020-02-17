import { ADD_PERSON, ADD_FINE, SUB_FINE } from "../ActionTypes";

const initialState = {
  persons: [
    {id:'1', name:'Surbhi', individualFine:0}
  ],
  fine: 10
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON: {
      console.log("action payload",action.payload);
      const newPerson = action.payload;
      console.log("newperson",newPerson);
      state.persons.push({id: Date.now(), name: newPerson, individualFine:0});
      let personArray = [...state.persons];
      console.log("person array",personArray);
      // let newUser = {id: Date.now(), name: newPerson, individualFine:0};
      // let personArray = [...state.persons.push(newUser)];
      // console.log(personArray);
      // let newPersonArray = personArray.push(newUser);
      return [...state.persons, personArray];
    }

    case ADD_FINE: {
      const { id } = action.payload;
      let arrayOfIndex = state.persons.map(user => user.id);
      let index = arrayOfIndex.indexOf(id);
      let updateUser = {...state.persons[index]};
      updateUser.individualFine = updateUser.individualFine + parseInt(state.fine);
      const personArray = [...state.persons];
      personArray[index] = updateUser;
      return [...state.persons, personArray];
    }

    case SUB_FINE: {
      const { id } = action.payload;
      let arrayOfIndex = state.persons.map(user => user.id);
      let index = arrayOfIndex.indexOf(id);
      let updateUser = {...state.persons[index]};
      updateUser.individualFine = updateUser.individualFine - parseInt(state.fine);
      const personArray = [...state.persons];
      personArray[index] = updateUser;
      return [...state.persons, personArray];
    }

    default:
    return state;
  }
}

import { ADD_PERSON, ADD_INDIVIDUAL_FINE, SUB_INDIVIDUAL_FINE } from "../ActionTypes";

const initialState = {
  persons: [
    {id:'1', name:'Surbhi', individualFine:0}
  ],
  fine: 10
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON: {
      let name = action.payload;
      let newPersons = [...state.persons];
      let newPerson = {
        id: Date.now(),
        name: name,
        individualFine: 0
      }

      newPersons.push(newPerson);
      return {
        ...state, persons: newPersons
      }
    }

    case ADD_INDIVIDUAL_FINE: {
      let updateUser = [...state.persons];
      let i = 0;
      for(i=0; i<updateUser.length; i++){
        if(updateUser[i].id === action.payload){
          break;
        }
      }
      updateUser[i].individualFine += parseInt(state.fine);
      return {
        ...state, persons:updateUser
      }
    }

    case SUB_INDIVIDUAL_FINE: {
      let updateUser = [...state.persons];
      let i = 0;
      for(i=0; i<updateUser.length; i++){
        if(updateUser[i].id === action.payload){
          break;
        }
      }
      updateUser[i].individualFine -= parseInt(state.fine);
      return {
        ...state, persons:updateUser
      }
    }

    default:
    return state;
  }
}

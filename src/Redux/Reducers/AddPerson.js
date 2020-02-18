import { ADD_PERSON, ADD_INDIVIDUAL_FINE, SUB_INDIVIDUAL_FINE, CALCULATE_TOTAL_FINE, WELCOME_USER_NAME } from "../ActionTypes";

const initialState = {
  persons: [
    {id:'1', name:'Surbhi', individualFine:0}
  ],
  fine: 10,
  totalFine: 0
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
        ...state, persons: updateUser
      }
    }

    case CALCULATE_TOTAL_FINE: {
      let updateUser = [...state.persons];
      let i = 0;
      let total = 0;
      for(i=0; i<updateUser.length; i++){
          total = total + updateUser[i].individualFine;
      }
      return {
        ...state, totalFine: total
      }
    }
    
    default:
    return state;
  }
}

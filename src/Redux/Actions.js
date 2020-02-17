import { ADD_PERSON, ADD_FINE, SUB_FINE } from "./ActionTypes";

export const addPerson = content => ({
  type: ADD_PERSON,
  payload: content
});

export const addFine = id => ({
  type: ADD_FINE,
  payload: { id }
});

export const subFine = id => ({
  type: SUB_FINE,
  payload: { id }
});

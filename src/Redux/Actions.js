import { ADD_PERSON, ADD_INDIVIDUAL_FINE, SUB_INDIVIDUAL_FINE } from "./ActionTypes";

export const addPerson = content => ({
  type: ADD_PERSON,
  payload: content
});

export const addIndividualFine = id => ({
  type: ADD_INDIVIDUAL_FINE,
  payload: id
});

export const subIndividualFine = id => ({
  type: SUB_INDIVIDUAL_FINE,
  payload: id
});

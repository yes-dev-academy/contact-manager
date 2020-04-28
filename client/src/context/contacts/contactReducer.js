import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    SET_CURRENT,
    CLEAR_CURRENT,
  } from "../types";

  export default (state,action) =>{

    switch (action.type) {
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts:[...state.contacts, action.payload],
                //console.log(statye)
            }
        default:
            return state;
            
    }
  }
import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../types";

const ContactState = (props) => {
  const initState = {
    contacts: [
      {
        id: 1,
        name: "dr.jakill",
        email: "jakill@yahoo.com",
        phone: "1111-2222",
        type: "personal",
      },
      {
        id: 2,
        name: "jim jarmoosh",
        email: "jimoosh@yahoo.com",
        phone: "1111-2222",
        type: "personal",
      },
      {
        id: 3,
        name: "merry foster",
        email: "mfoster@yahoo.com",
        phone: "1333-4442",
        type: "professional",
      },
    ],
    current:null
  };

  const [state,dispatch] = useReducer(contactReducer,initState);

  //add Contact
  const addContact = contact =>{
    contact.id = uuidv4();
    dispatch({type:ADD_CONTACT,payload:contact})    
  }
  //delete Contact
  const deleteContact = id =>{
    dispatch({type:DELETE_CONTACT,payload:id})    
  }
  //Set current Contact
  const setCurrent = contact =>{
    dispatch({type:SET_CURRENT,payload:contact})    
  }
  //Clear current contact
  const clearCurrent = () =>{
    dispatch({type:CLEAR_CURRENT})    
  }
  //Uptade contact
const updateContact = contact =>{
  dispatch({type:UPDATE_CONTACT,payload:contact})
}
  //Filter Contacts

  //Clear Contacts


  return(
      <ContactContext.Provider
      value={{
          contacts:state.contacts,
          current: state.current,
          addContact,deleteContact,setCurrent,clearCurrent,updateContact
      }}
      >
      {
          props.children
      }
      </ContactContext.Provider>
  );
};

export default ContactState;
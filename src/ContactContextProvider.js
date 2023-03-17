import axios from "axios";
import React, { createContext, useState } from "react";

export const contactsContext = createContext();

const ContactContextProvider = ({ children }) => {
  const API = "http://localhost:8000/contacts";
  const [contacts, setContacts] = useState([]);
  //! add
  async function addContact(newContact) {
    await axios.post(API, newContact);
  }
  //!read
  async function getContacts() {
    let res = await axios.get(API);
    setContacts(res.data);
  }
  //   console.log(contacts);
  return (
    <contactsContext.Provider value={{ addContact, getContacts, contacts }}>
      {children}
    </contactsContext.Provider>
  );
};

export default ContactContextProvider;

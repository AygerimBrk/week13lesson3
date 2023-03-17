import React, { useContext, useEffect } from "react";
import { contactsContext } from "../ContactContextProvider";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { getContacts, contacts } = useContext(contactsContext);
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>Contact Book</h1>
      <div className="d-flex flex-wrap justify-content-center mt-5">
        {contacts.map((item) => (
          <ContactCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;

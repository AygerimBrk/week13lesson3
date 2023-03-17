import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { contactsContext } from "../ContactContextProvider";

const AddForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  //   console.log(name, lastName, phone);

  const { addContact } = useContext(contactsContext);

  const handleValues = () => {
    const newContact = {
      name,
      lastName,
      phone,
    };

    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      alert("заполните поля");
      return;
    }

    addContact(newContact);
  };

  return (
    <div className="d-flex flex-column mt-5 align-items-center">
      <h1>Add Contact</h1>
      <Form.Control
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 w-50"
        type="text"
        placeholder="name"
      />
      <Form.Control
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="mb-2 w-50"
        type="text"
        placeholder="SurName"
      />
      <Form.Control
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="mb-2 w-50"
        type="text"
        placeholder="phone"
      />
      <Button onClick={handleValues} className="w-50" variant="warning">
        add contact
      </Button>
    </div>
  );
};

export default AddForm;

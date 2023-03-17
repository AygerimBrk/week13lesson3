import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddForm from "./Components/AddForm";
import ContactList from "./Components/ContactList";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import ContactContextProvider from "./ContactContextProvider";
import CounterContextProvider from "./CounterContextProvider";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ContactContextProvider>
          <CounterContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/add" element={<AddForm />} />
              <Route path="/counter" element={<Counter />} />
            </Routes>
          </CounterContextProvider>
        </ContactContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

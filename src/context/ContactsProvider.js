import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContactsContext = React.createContext({
  contacts: [],
  createContact: (id, name) => {},
});

const useContacts = () => {
  return useContext(ContactsContext);
};

export default useContacts;

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  const createContact = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  };

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
}

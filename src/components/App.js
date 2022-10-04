import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import DashBoard from "./DashBoard";
import { ContactsProvider } from "../context/ContactsProvider";
import { ConversationsProvider } from "../context/ConversationsProvider";

const App = () => {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <DashBoard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
};

export default App;

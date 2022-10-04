import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import DashBoard from "./DashBoard";
import { ContactsProvider } from "../context/ContactsProvider";

const App = () => {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <DashBoard id={id} />
    </ContactsProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
};

export default App;

import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import DashBoard from "./DashBoard";

const App = () => {
  const [id, setId] = useLocalStorage("id");
  return id ? <DashBoard id={id} /> : <Login onIdSubmit={setId} />;
};

export default App;

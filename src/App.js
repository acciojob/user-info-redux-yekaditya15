// App.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from "./redux/action";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state);

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Information</h1>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div className="output" style={{ marginTop: "20px" }}>
        <h2>Current values in store:</h2>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};
export default App;

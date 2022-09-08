
import React, { useState } from "react";
import People from "./components/People"
import Planets from "./components/Planets"
import Starships from "./components/Starships"
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";

function App() {
  // STATE
  const [category, setCategory] = useState('People');
  const [id, setId] = useState();

  // CREATING A NAVIGATE FUNCTION
  const navigate = useNavigate();
  // EVENT HANDLE
  const changeCatagory = (e) => {
    setCategory(e.target.value);
  }
  const changeId = (e) => {
    setId(e.target.value);
  }
  const submitResult = () => {
    navigate(`/${category}/${id}`)
  }
  return (
    <div>
      <h1>Welcome to my Super AWESOME Star Wars Thingy!</h1>
      <label>Search For: </label>
      <select onChange={changeCatagory} id="">
        <option value="People">People</option>
        <option value="Planets">Planets</option>
        <option value="Starships">Starships</option>
      </select>
      <label> ID: </label>
      <input onChange={changeId} type="number"/>
      <button onClick={ submitResult }>search</button>
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/starships/:id" element={<Starships />} />
      </Routes>
    </div>
  );
}

export default App
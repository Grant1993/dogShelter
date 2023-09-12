import React, { useState } from "react";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import hazel from "./images/hazel.jpg";
import "./App.css";

function Layout({ dogs }) {
  return (
    <div>
      <Navbar dogs={dogs} />
      <Outlet />
    </div>
  );
}

function App() {
  const [dogs] = useState([
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food.",
      ],
    },
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/dogs' />} />
          <Route exact path='/dogs' element={<Layout dogs={dogs} />}>
            <Route index element={<DogList dogs={dogs} />} />
            <Route path=':name' element={<DogDetails dogs={dogs} />} />
          </Route>
          <Route path='*' element={<Navigate to='/dogs' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

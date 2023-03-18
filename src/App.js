import {
  Route,
  Routes
} from "react-router-dom";
import './index.css'
import React from "react";
import Create from "./components/Create/Create";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import MyPhotos from "./components/MyPhotos/MyPhotos";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import { Details } from "./components/Details/Details";
import Edit from "./components/Edit/Edit";


function App() {
  return (

    <div className="App">
      <Header />
      <main>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myPhotos" element={<MyPhotos />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details" element={<Details />} />
        <Route path="/edit" element={<Edit />} />

      </Routes>
      </main>
    </div>
  );
}

export default App;

import Header from "./components/Layout/Header";
import "./App.css";
import { useState } from "react";
import classes from "./body.module.css";
import { Routes, Route } from "react-router-dom";
import AddPage from "./components/AddPage";
import HomePage from "./components/HomePage";

function App() {
  const [image, setImageSrc] = useState("");
  
  return (
    <div>
      <Header/>
      <div className={classes.mainPage}>
        <Routes>
          <Route path="Add" element={<AddPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

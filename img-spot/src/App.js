import Header from "./components/Layout/Header";
import "./App.css";
import { useState } from "react";
import classes from "./body.module.css";
import { Routes, Route } from "react-router-dom";
import AddPage from "./components/AddPage";
import HomePage from "./components/HomePage";

function App() {
  const [image, setImageSrc] = useState([]);
  const [login,setlogin]=useState();
  const [favourites,setFavourites]=useState(false);
  const [admin, setAdmin] = useState(false);
  function setedImage(element)
  {
    setImageSrc(element);
    
  }

  return (
    <div>
      <Header admin={admin} setAdmin={setAdmin} setImages={setedImage} setLogin={setlogin} login={login} setFavourites={setFavourites} favourites={favourites}/>
      <div className={classes.mainPage}>
        <Routes>
          <Route path="Add" element={<AddPage />}></Route>
          <Route path="/" element={<HomePage Login={login} images={image} favourites={favourites} admin={admin}/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

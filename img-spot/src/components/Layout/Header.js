import classes from "./Header.module.css";
import Star from "./star.png";
import Add from "./Add.png";
import Avatar from "./Avatar.png";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm";
import { useState } from "react";

function Header() {
  const [modal, setModal] = useState(false);

  return (
    <header className={classes.header}>
      <Link to="/">
        <img src="Logo.jpg" alt="Blya" className={classes.img}></img>
      </Link>
      <div>
        <input id="searchbar" className={classes.searchbar}></input>

        <img src={Star} alt="Hi" className={classes.star} />
        <Link to="/Add">
          <img src={Add} alt="Hi" className={classes.add} />
        </Link>
        <img src={Avatar} className={classes.avatar} onClick={()=>setModal(true)} />
        {modal ? <LoginForm closeLogin={setModal}/> : <></>} 
      </div>
    </header>
  );
}

export default Header;

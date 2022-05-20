import classes from "./Header.module.css";
import Star from "./star.png";
import Add from "./Add.png";
import Avatar from "./Avatar.png";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm";
import { useState, useRef } from "react";

function Header(props) {
  function showFavourites() {
    props.setFavourites(true);
    let url = `https://localhost:44362/Image/GetFavourites?login=${props.login}`;
    const otherInfo = {
      headers: { accept: "text/plain" },
    };
    fetch(url, otherInfo)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        props.setImages(res);
      });
  }
  
  const [modal, setModal] = useState(false);
  const ImageTags = useRef();

  function sendRequest(e) {
    props.setFavourites(false);
    if (e.which === 13) {
      let tags = ImageTags.current.value;
      let url = `https://localhost:44362/Image/GetImages?tags=${tags}`;
      fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          props.setImages(res);
        });
    }
  }
  return (
    <header className={classes.header}>
      <Link to="/">
        <img
          src="Logo.jpg"
          alt="Blya"
          className={classes.img}
          onClick={() => props.setFavourites(false)}
        ></img>
      </Link>
      <div>
        <Link to="/">
          <input
            onKeyDown={sendRequest}
            id="searchbar"
            className={classes.searchbar}
            ref={ImageTags}
          ></input>
        </Link>
        {props.login ? (
          <img
            src={Star}
            alt="Hi"
            onClick={showFavourites}
            className={classes.star}
          />
        ) : (
          <></>
        )}

        {props.admin ? (
          <Link to="/Add">
            <img src={Add} alt="Hi" className={classes.add} />
          </Link>
        ) : (
          <></>
        )}

        <img
          src={Avatar}
          className={classes.avatar}
          onClick={() => setModal(true)}
        />
        {modal ? (
          <LoginForm
            setAdmin={props.setAdmin}
            closeLogin={setModal}
            setLogin={props.setLogin}
          />
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}

export default Header;

import classes from "./ImageCard.module.css";
import AddToFavourite from "./AddToFavourite.png";
import Cross from "./Layout/Cross.png";

function ImageCard(props) {
  function deleteImage(){
    const formData={
      url:props.Image
    }
    const otherParameters = {
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
      method: "DELETE",
    };
    fetch("https://localhost:44362/Image/DeleteImage", otherParameters)
    .then((data) => {
      if (!data.ok) {
        alert("Image is already deleted");
        return Promise.reject();
      }
      alert("Image deleted!");
      return data.json();
    })
    .then((res) => {})
    .catch();
  }


  function addToFavourite() {
    const login = props.Login;
    const imaheUrl = props.Image;
    const formdata = {
      email: login,
      url: imaheUrl,
    };
    if (props.favourites) {
      const otherParameters = {
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formdata),
        method: "DELETE",
      };
      fetch("https://localhost:44362/Image/DeleteFavourite", otherParameters)
        .then((data) => {
          if (!data.ok) {
            alert("Image is already not favourites");
            return Promise.reject();
          }

          return data.json();
        })
        .then((res) => {})
        .catch();
    } else {
      const otherParameters = {
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formdata),
        method: "PUT",
      };
      fetch("https://localhost:44362/Image/AddFavourite", otherParameters)
        .then((data) => {
          if (!data.ok) {
            alert("Image is already in favourites");
            return Promise.reject();
          }

          return data.json();
        })
        .then((res) => {})
        .catch();
    }
  }
  return (
    <div className={classes.imageCard}>
      <img className={classes.image} src={props.Image}></img>
      <div className={classes.textArea}>{props.ImageTags}</div>
      <div className={classes.Buttons}>
        {props.Login != undefined ? (
          <img
            src={AddToFavourite}
            className={classes.favouriteButton}
            onClick={addToFavourite}
          ></img>
        ) : (
          <></>
        )}
        {props.admin ? (
          <img src={Cross} className={classes.DeleteButton} onClick={deleteImage}></img>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ImageCard;

import Table from "./ImgTable";
import Card from "./ImageCard";
import classes from "../body.module.css";
import { useState } from "react";
function HomePage(props) {
  const [image, setImageSrc] = useState("");
  const [text, setText] = useState("");
  

  return (
    <div className={classes.mainPage}>
      <Table
        changePicture={setImageSrc}
        changeText={setText}
        src={props.images}
      />
      <Card Image={image} Login={props.Login} ImageTags={text} favourites={props.favourites} admin={props.admin}/>
    </div>
  );
}

export default HomePage;

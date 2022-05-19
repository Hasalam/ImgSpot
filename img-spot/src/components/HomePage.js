import Table from "./ImgTable";
import Card from "./ImageCard";
import classes from "../body.module.css";
import { useState } from "react";
function HomePage() {
  const [image, setImageSrc] = useState("");
  const [text, setText] = useState("");
  

  return (
    <div className={classes.mainPage}>
      <Table
        changePicture={setImageSrc}
        changeText={setText}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAe0Yu14w9mSulO7Bo3KC0sU1lxG3H17DwCuMqWVjBns1wqdf6SJ7ALKhcZkHsEDRHvpI&usqp=CAU"
      />
      <Card Image={image} ImageTags={text} />
    </div>
  );
}

export default HomePage;

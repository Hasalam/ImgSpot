import { useRef, useState } from "react";
import classes from "./AddPage.module.css";
import ImageCard from "./ImageCard";
function AddPage() {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const imageUrlRef = useRef();
  const imageTagsRef = useRef();

  function CheckImage() {
    setImage(imageUrlRef.current.value);
    setText(imageTagsRef.current.value);
  }

  function submitImage(event) {
    event.preventDefault();
    const formdata = {
      id: 0,
      url: imageUrlRef.current.value,
      tags: imageTagsRef.current.value
    };
    const otherParameters = {
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formdata),
      method: "POST",
    };

    fetch("https://localhost:44362/Image/AddImage", otherParameters)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <div className={classes.addPage}>
      <form onSubmit={submitImage} className={classes.imageForm}>
        <label htmlFor="ImageUrl">Image url</label>
        <input
          type="url"
          name="ImageUrl"
          ref={imageUrlRef}
          className={classes.imageLabel}
          required
        ></input>
        <label htmlFor="ImageTags">Tags</label>
        <input
          name="ImageTags"
          ref={imageTagsRef}
          className={classes.imageLabel}
          required
        ></input>
        <button type="button" onClick={CheckImage}>
          Check
        </button>
        <button>Submit</button>
      </form>
      <div className={classes.imageCard}>
        <ImageCard Image={image} ImageTags={text} />
      </div>
    </div>
  );
}

export default AddPage;

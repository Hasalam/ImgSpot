import classes from"./ImgTable.module.css";
import TableImg from "./TableImg";

function ImgTable(props) {
  return (
    <div className={classes.divTable}>
     {
       
         props.src.map(picture=>{
           return(<TableImg src={picture.url} onClick={props.changePicture} text={picture.tags} setText={props.changeText}/>)
         })
       
     }
     
    </div>
  );
}

export default ImgTable;

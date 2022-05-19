import classes from './ImageCard.module.css'
import AddToFavourite from "./AddToFavourite.png"


function ImageCard(props){
    
    return(
        <div className={classes.imageCard}>
            <img className={classes.image} src={props.Image}></img>
            <div className={classes.textArea}>{props.ImageTags}</div>
            <img src={AddToFavourite} className={classes.favouriteButton}></img>
        </div>

    )

}

export default ImageCard;
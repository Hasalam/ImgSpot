import classes from"./ImgTable.module.css";

function TableImg(props)
{
    
    return(
        
            <img className={classes.img} src={props.src} onClick={()=>{props.onClick(props.src); props.setText(props.text)}}></img>
        
    )

}

export default TableImg
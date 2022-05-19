import classes from"./ImgTable.module.css";
import TableImg from "./TableImg";

function ImgTable(props) {
  return (
    <div className={classes.divTable}>
     <TableImg text="#elgato#cat#funny" setText={props.changeText} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAe0Yu14w9mSulO7Bo3KC0sU1lxG3H17DwCuMqWVjBns1wqdf6SJ7ALKhcZkHsEDRHvpI&usqp=CAU" onClick={props.changePicture}/>
     <TableImg text="#meme#true"  onClick={props.changePicture} setText={props.changeText} src="https://scontent.flwo4-1.fna.fbcdn.net/v/t1.6435-9/72139178_729040254259827_1198333194554834944_n.png?_nc_cat=109&ccb=1-6&_nc_sid=730e14&_nc_ohc=X5Xjvm0DqxAAX_ZcOU2&_nc_ht=scontent.flwo4-1.fna&oh=00_AT97L2596qw87w5sng573T_lOhvnUxA9SV8O392V4uuZEw&oe=62AC5875"/>
     
    </div>
  );
}

export default ImgTable;

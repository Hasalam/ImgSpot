import classes from "./Header.module.css";
import Star from "./star.png";

function Header() {
  return (
    <header className={classes.header}>
      <img src="Logo.jpg" alt="Blya" className={classes.img}></img>
      <div>
        <input id="searchbar" className={classes.searchbar}></input>

        <img src={Star} alt="Hi" className={classes.star} />
      </div>
    </header>
  );
}

export default Header;

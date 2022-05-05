import classes from "./Header.module.css"

function Header(){
    return(
        <header className={classes.header}>
            <img src="Logo.jpg" alt="Blya" className={classes.img}></img>
            <div className={classes.searchbar}><img src="magnifying_glass.png" alt="mag" className={classes.magglas}></img></div>
            
        </header>
    )

}

export default Header;
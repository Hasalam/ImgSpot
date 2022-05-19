import classes from "./LoginForm.module.css"

function LoginForm(props) {
  function submitHandler(event){
    event.preventDefault();
    props.closeLogin(false);
  }
  return (
    <form className={classes.imageForm} onSubmit={submitHandler}>
      <label htmlFor="Email" className={classes.element}>Email</label>
      <input
        type="email"
        name="Email"
        className={classes.element}
      ></input>
      <label htmlFor="Password" className={classes.element}>Password</label>
      <input
        type="password"
        name="Password"
        className={classes.element}
      ></input>
      <button>Login</button>
    </form>
  );
}

export default LoginForm;

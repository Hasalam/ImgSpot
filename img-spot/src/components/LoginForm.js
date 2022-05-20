import classes from "./LoginForm.module.css";
import { useRef } from "react";
function LoginForm(props) {
  const Email = useRef();
  const Password = useRef();

  function registerHandler()
  {
    const data = {
      email: Email.current.value,
      password: Password.current.value,
    };
    const otherParameters = {
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
      method: "POST",
    };
    fetch("https://localhost:44362/Image/Register", otherParameters)
    .then((data) => {
      if(!data.ok)
      {
        alert("User is already registered!")
        return Promise.reject();
      }
      props.closeLogin(false);
      return data.json();
    })
    .then((res) => {
      props.setAdmin(res.isAdmin);
      props.setLogin(res.email);
    }).catch();
  }

  function submitHandler(event) {
    event.preventDefault();
    const data = {
      email: Email.current.value,
      password: Password.current.value,
    };
    const otherParameters = {
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
      method: "POST",
    };
    fetch("https://localhost:44362/Image/Login", otherParameters)
      .then((data) => {
        if(!data.ok)
        {
          alert("Wrong data!")
          return Promise.reject();
        }
        props.closeLogin(false);
        return data.json();
      })
      .then((res) => {
        props.setAdmin(res.isAdmin);
        props.setLogin(res.email);
      }).catch();
    
  }
  return (
    <form className={classes.imageForm} onSubmit={submitHandler}>
      <label htmlFor="Email" className={classes.element}>
        Email
      </label>
      <input
        type="email"
        name="Email"
        className={classes.element}
        ref={Email}
      ></input>
      <label htmlFor="Password" className={classes.element}>
        Password
      </label>
      <input
        type="password"
        name="Password"
        className={classes.element}
        ref={Password}
      ></input>
      <button>Login</button>
      <button type="button" onClick={registerHandler}>Register</button>
    </form>
  );
}

export default LoginForm;

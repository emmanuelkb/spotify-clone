import Logo2 from "../components/Logo2";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (login === "emmanuelkb" || login === "kaabutu@gmail.com") &&
      password === "12345"
    ) {
      alert("Successfully logged in");
    } else if (
      (login !== "emmanuelkb" || login !== "kaabutu@gmail.com") &&
      password === "12345"
    ) {
      alert("incorrect username or email");
    } else alert("incorrect password");
  };

  return (
    <div className="loginpage">
      <Logo2 />
      <hr className="hr1" />
      <div className="loginMain">
        <p>To continue, log in to Spotify.</p>
        <button type="button" className="fbbutton">
          CONTINUE WITH FACEBOOK
        </button>
        <button type="button" className="applebutton">
          CONTINUE WITH APPLE
        </button>
        <button type="button" className="googlebutton">
          CONTINUE WITH GOOGLE
        </button>
        <button type="button" className="pnbutton">
          CONTINUE WITH PHONE NUMBER
        </button>
        <p className="lineWithOr">
          <span>OR</span>
        </p>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="login">Email address or username</label>
          <input
            type="text email"
            name="login"
            id="login"
            placeholder="Email address or username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Forgot your password?</p>
          <div className="checkSubmit">
            <div className="checkboxDiv">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="loginButton">
              LOG IN
            </button>
          </div>
        </form>
        <hr className="hr2" />

        <h3>Don't have an account?</h3>
        <Link to="/signup">
          <button className="signupButton">SIGN UP FOR SPOTIFY</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;

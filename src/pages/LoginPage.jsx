import Logo2 from "../components/Logo2";
import "../components/Login.css";
const LoginPage = () => {
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
        <form className="loginForm">
          <label htmlFor="login">Email address or username</label>
          <input type="text email" name="login" id="login" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
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
        <button className="signupButton">SIGN UP FOR SPOTIFY</button>
      </div>
    </div>
  );
};

export default LoginPage;

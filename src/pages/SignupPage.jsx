import Logo2 from "../components/Logo2";
import "../components/Signup.css";

const SignupPage = () => {
  return (
    <div className="signuppage">
      <Logo2 />
      <div className="signupmain">
        <h2 className="bottomp">Sign up for free to start listening.</h2>
        <button className="fbbutton button ">SIGN UP WITH FACEBOOK</button>
        <p className="linewithor">
          <span>or</span>
        </p>
        <h3 className="bottomp">Sign up with your email address</h3>
        <form className="signupform">
          <label className="formLabel" htmlFor="email">
            What's your email?
          </label>
          <input class="inputBoxes" type="email" name="email" id="email" />
          <label className="formLabel" htmlFor="confirmemail">
            Confirm your email?
          </label>
          <input
            class="inputBoxes"
            type="email"
            name="confirmemail"
            id="confirmemail"
          />
          <label className="formLabel" htmlFor="password">
            Create a password
          </label>
          <input
            class="inputBoxes"
            type="password"
            name="password"
            id="password"
          />
          <label className="formLabel" htmlFor="profilename">
            What should we call you?
          </label>
          <input
            class="inputBoxes"
            type="text"
            name="profilename"
            id="profilename"
          />
          <label className="formLabel labelExcept">
            This appears on your profile
          </label>
          <div className="dateofbirth">
            <label className="formLabel" htmlFor="dob">
              What's your date of birth?
            </label>
            <div className="dobColumn">
              <div className="monthcolumn">
                <label className="doblabels" htmlFor="month">
                  Month
                </label>
                <span>
                  <select className="dobinput month" id="month" name="month">
                    <option selected="" disabled="" value="">
                      Month
                    </option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </span>
              </div>
              <div className="daycolumn">
                <label className="doblabels" htmlFor="day">
                  Day
                </label>
                <span>
                  <input
                    className="dobinput day"
                    type="text"
                    id="day "
                    inputmode="numeric"
                    maxlength="2"
                    name="day"
                    pattern="((0?[1-9])|([12][0-9])|(3[01]))"
                    placeholder="DD"
                  ></input>
                </span>
              </div>
              <div className="yearcolumn">
                <label className="doblabels" htmlFor="year">
                  Year
                </label>
                <span>
                  <input
                    className="dobinput year"
                    type="text"
                    id="year "
                    inputmode="numeric"
                    maxlength="4"
                    name="year"
                    pattern="(19[0-9]{2})|(200)[0-8]"
                    placeholder="YYYY"
                  ></input>
                </span>
              </div>
            </div>
          </div>
          <div>
            <label className="formLabel " htmlFor="gender">
              What's your gender
            </label>
            <div className="genderradio">
              <input type="radio" name="gender" id="male" value="Male" />
              <label className="genderLabel" htmlFor="male">
                Male
              </label>
              <input type="radio" name="gender" id="female" value="Female" />
              <label className="genderLabel" htmlFor="female">
                Female
              </label>
              <input
                type="radio"
                name="gender"
                id="nonbinary"
                value="Non-Binary"
              />
              <label className="genderLabel" htmlFor="nonbinary">
                Non-Binary
              </label>
            </div>
          </div>
          <div className="checkboxdiv">
            <input type="checkbox" name="share" id="share" />
            <label className="checkboxLabel" htmlFor="share">
              Share my registration data with Spotify's content providers for
              marketing purposes.
            </label>
          </div>
          <p id="bottomP" className="bottomp">
            By clicking on Sign up,you agree to Spotify's Terms and Conditions
            of Use.
          </p>

          <p id="bottomP" className="bottomp">
            To learn more about how Spotify collects, uses, shares and protects
            your personal data please read Spotify's Privacy Policy.
          </p>
          <button className=" signupbutton button">SIGN UP</button>
        </form>
        <p className="bottomp">
          Have an account? <span>Log in.</span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

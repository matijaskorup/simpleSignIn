import React from "react";
import "./styles/homePage.styles.css";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Input from "./Input";
import Footer from "./footer";

function HomePage() {
  return (
    <div className="main">
      <div className="image-holder" />
      <img
        alt="bgImage"
        src="https://cdn.pixabay.com/photo/2016/08/22/02/18/lomografia-1611256_1280.jpg"
      />
      <div className="form-holder">
        <form>
          <div className="open-icon">
            <LockOpenIcon fontSize="large" />
          </div>
          <h1>Sign in</h1>
          <div className="input-holder">
            <Input
              className="textInput"
              type={"text"}
              placeholder={"Email Address"}
            />
          </div>

          <Input className="textInput" type={"text"} placeholder={"Password"} />

          <div>
            <Input className="check-box" type="checkbox" /> &nbsp; Remember me
          </div>
          <button type="submit">
            <span>SIGN IN</span>
          </button>
          <div className="submenu">
            <div className="password-f">Forgot password?</div>
            <div className="sign-up">Dont have an account? Sign up</div>
          </div>
          <Footer />
        </form>
      </div>
    </div>
  );
}

export default HomePage;

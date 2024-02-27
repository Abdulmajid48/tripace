import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

// Google and Facebook register Page

function Authenticate(props) {
  const [showPassword, setShowpassword] = useState(false);

  // change password from Password case to  text case
  function handlePassword() {
    setShowpassword((prevValue) => {
      return !prevValue;
    });
  }
  // prevent page from reloading when hide button is pressed
  function handleMouseDownPassword(event) {
    event.preventDefault();
  }

  return (
    <div
      className="authdiv"
      style={{ height: props.newuser ? "135dvh" : null }}
    >
      <div className="transparentdiv">
        <div className="whitebox">
          <div>
            <div>
              {props.tripace}
              <p
                className="welcometo"
                style={{ marginTop: props.newuser ? null : "35px" }}
              >
                {props.welcome}
              </p>
              <p className="createyour">{props.create}</p>
            </div>
            {props.googlefacebook}
            <form>
              <label className="formblock" for="email">
                {props.email}
              </label>
              <input
                className="formblock"
                type="email"
                id="email"
                name="email"
                required
              />
              <label className="formblock labelflex" for="password">
                <p className="iconpadding">{props.password}</p>
                <p className="iconpadding">
                  <IconButton
                    aria-label="toggle password visibility"
                    size="small"
                    onClick={handlePassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                  {props.hide}
                </p>
              </label>
              <input
                className="formblock"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
              />
              <p className="forgetpassword">{props.forgetpassword}</p>
            </form>

            {props.policy}

            <div
              className="creatediv"
              style={{ marginTop: props.oldmember ? "40px" : null }}
            >
              <button className="buttonq">{props.buttonword}</button>
              {props.signin}
            </div>
          </div>
        </div>
      </div>
      <div className="accountpic" style={props.image}></div>
    </div>
  );
}

export default Authenticate;

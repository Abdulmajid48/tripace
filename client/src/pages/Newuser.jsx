import Authenticate from "../components/Authenticate";

function Newuser() {
  return (
    <Authenticate
      newuser={true}
      tripace={<p className="tripace">TRIPACE</p>}
      welcome={"Welcome to TripAce"}
      create={"Create your free account and get started with your trip plan"}
      email={"Email"}
      password={"Password"}
      hide={"Hide"}
      buttonword={"Create free Account"}
      signin={
        <p>
          Already have an account? <span>Sign in</span>
        </p>
      }
      image={{ backgroundImage: "url('./images/image.jpg')" }}
      googlefacebook={
        <div className="googlefacebook">
          <div>
            {" "}
            <button className="googlefacebookbtn">
              <img src="./images/facebook logo.svg" alt="" /> Log in with
              Facebook
            </button>
          </div>
          <div>
            {" "}
            <button className="googlefacebookbtn">
              <img src="./images/google logo.svg" alt="" /> Log in with Google
            </button>
          </div>
          <div class="divider">Or</div>
        </div>
      }
      forgetpassword={"Forgot Password"}
    />
  );
}

export default Newuser;

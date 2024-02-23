import Authenticate from "../components/Authenticate";

function Olduser() {

    return(
        <Authenticate
         welcome={"Welcome to TripAce"}
         create={"Create your free account and get started with your trip plan"}
         email={"Email"}
         password={"Password"}
         hide={"Hide"}
         policy={<div className="checkboxcontainer">
                  <input type="checkbox" id="thecheckbox" />
                  <div for="thecheckbox" className="thecheckboxlabel">
                   By creating an account, you agree to the <span> Terms of use </span> and <span> Privacy Policy.</span>
                  </div>
                </div>}
         buttonword={"Create free Account"}
         signin={<p>Already have an account? <span>Sign in</span></p>}
         image={{backgroundImage:"url('./images/Rectangle.jpg')"}}
        />
    )
    
}

export default Olduser;
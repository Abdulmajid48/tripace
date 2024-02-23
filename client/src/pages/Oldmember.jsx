import Authenticate from "../components/Authenticate";

function Oldmember() {
    return(
         <Authenticate
         oldmember={true}
         welcome={"Welcome Back"}
         create={"Sign In to your account"}
         email={"Email"}
         password={"Password"}
         hide={"Hide"}
         buttonword={"Create free Account"}
         signin={<p>Already have an account? <span>Sign in</span></p>}
         image={{backgroundImage:"url('./images/Rectangle.jpg')"}}
        />
    )
    
}

export default Oldmember;

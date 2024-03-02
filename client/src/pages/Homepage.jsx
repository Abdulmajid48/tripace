import Body from "../components/Body";
import Footer from "../components/Footer";
import { Homenavbar } from "../components/Navbars";

function Homepage() {
  return (
    <div className="general">
      <Homenavbar />
      <Body />
      <Footer />
    </div>
  );
}

export default Homepage;

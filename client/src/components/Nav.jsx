import { NavLink } from "react-router-dom";

// Main Nav Bar
function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbarcontainer">
        <div className="container-fluid containers">
          <div>
            <NavLink to="/" className="navbar-brand navtripace">
              {props.tripace}
            </NavLink>
          </div>
          {props.navoptions}
          {props.userprofile}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

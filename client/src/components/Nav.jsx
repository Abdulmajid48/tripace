import { NavLink } from "react-router-dom";

// Main Nav Bar
function Navbar(props) {
  return (
    <div className="allcon">
      <div className="navtripace">
        <NavLink to="/" className="navbar-brand me-auto navtripace">
          {props.tripace}
        </NavLink>
      </div>
      <nav class="navbar navbar-expand-lg">
        <div>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Options
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body subcontainer">
              {props.navoptions}
              {props.userprofile}
            </div>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

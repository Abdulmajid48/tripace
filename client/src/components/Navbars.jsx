import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Nav";

function Authnavbar() {
  return (
    <div>
      <Navbar
        tripace={"TRIPACE"}
        navoptions={
          <div>
            <ul className=" navitems">
              <li>
                <NavLink to="/firststep" className=" navlink">
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/tripsummary" className="navlink">
                  <img src="./images/cart.svg" alt="" />
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="navlink">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        }
        userprofile={
          <div>
            <ul className=" navitems">
              <li>
                <NavLink to="" className=" navlink">
                  <img src="./images/notifications.svg" alt="" />
                </NavLink>
              </li>
              <li>
                <div className="navlink userprofile">
                  <p className="username">Maleek A.</p>
                  <p className="accountype">Free account</p>
                </div>
              </li>
              <li>
                <NavLink to="" className="navlink navpic">
                  <img src="./images/profilepic.svg" alt="" />
                </NavLink>
                <img src="./images/vectorblack.svg" alt="" />
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
}

function Homenavbar(props) {
  return (
    <Navbar
      tripace={"TRIPACE"}
      navoptions={
        <div>
          <ul className=" navitems">
            <li>
              <NavLink to="/" className="homebutton navlink">
                {props.itinerary ? "Dashboard" : " Home"}
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="navlink">
                Pricing
              </NavLink>
            </li>
            <li>
              <a className="navlink" href="www.google.com">
                FAQ
              </a>
            </li>
            <li>
              <a className="navlink" href="www.google.com">
                Blog
              </a>
            </li>
          </ul>
        </div>
      }
      userprofile={
        <div>
          <NavLink to="/olduser">
            <button className="btn btn-light navbtn" type="submit">
              Sign up
            </button>
          </NavLink>
          <NavLink to="/oldmember">
            <button className="btn btn-dark navbtn" type="submit">
              Sign in
            </button>
          </NavLink>
        </div>
      }
    />
  );
}

function Inspirationbar(props) {
  return (
    <div>
      <Navbar
        tripace={"TRIPACE"}
        navoptions={
          <div>
            <ul className=" navitems">
              <li>
                <NavLink to="" className=" navlink">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/flights" className="navlink">
                  Flights
                </NavLink>
              </li>
              <li>
                <NavLink to="/hotels" className="navlink">
                  Hotels
                </NavLink>
              </li>
              <li>
                <NavLink to="/travelinspiration" className="navlink">
                  Visa
                </NavLink>
              </li>
            </ul>
          </div>
        }
        userprofile={
          <div>
            <ul className=" navitems">
              <li>
                <NavLink to="" className=" navlink">
                  <img src="./images/notifications.svg" alt="" />
                </NavLink>
              </li>
              <li>
                <div className="navlink userprofile">
                  <p className="username">Maleek A.</p>
                  <p className="accountype">Free account</p>
                </div>
              </li>
              <li>
                <NavLink to="" className="navlink navpic">
                  <img src="./images/profilepic.svg" alt="" />
                </NavLink>
                <img src="./images/vectorblack.svg" alt="" />
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
}

export default Authnavbar;
export { Homenavbar, Inspirationbar };

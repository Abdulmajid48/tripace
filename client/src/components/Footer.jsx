import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <div className="footer">
        <footer>
          <div className="footer">
            <div className="footertitle">
              <h5 className="aligntitle">TRIPACE</h5>
              <div className="icons">
                <img src="./images/Facebook.svg" alt="" />
                <img src="./images/Group.svg" alt="" />
                <img src="./images/logos_youtube.svg" alt="" />
                <NavLink to="https://www.twitter.com/aladejanaamajid">
                  <img src="./images/twitter.svg" alt="" />
                </NavLink>
              </div>
            </div>
            <div className="bigsection">
              <div className="smallsection">
                <div className="section deletesections">
                  <ul className="">
                    <li className="">
                      <NavLink to="" className="nav-link ">
                        About us
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink to="" className="nav-link ">
                        FAQ
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink to="" className="nav-link ">
                        Blog
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink to="" className="nav-link ">
                        Pricing
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="section deletesections">
                  <ul className="">
                    <li className=" ">
                      <NavLink to="" className="nav-link ">
                        Legal
                      </NavLink>
                    </li>
                    <li className=" ">
                      <NavLink to="" className="nav-link ">
                        Cookies
                      </NavLink>
                    </li>
                    <li className=" ">
                      <NavLink to="" className="nav-link ">
                        Privacy Policy
                      </NavLink>
                    </li>
                    <li className=" ">
                      <NavLink to="" className="nav-link ">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="section">
                  <ul className="">
                    <li className="deletesections">
                      <NavLink to="" className="nav-link">
                        Legal
                      </NavLink>
                    </li>
                    <li className="deletesections">
                      <NavLink to="" className="nav-link">
                        Cookies
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink to="" className="nav-link">
                        Privacy Policy
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink
                        to="https://www.twitter.com/aladejanaamajid"
                        className="nav-link"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" form">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="forminput">
                    <label for="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="email"
                      className="formi"
                      placeholder="Email address"
                    />
                    <button className=" buttonq" type="button">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top copyright">
            <p>© {year} Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex deletesections">
              <li className="ms-3">
                <NavLink to="" className="link-body-emphasis">
                  <svg className="bi" width="24" height="24"></svg>
                </NavLink>
              </li>
              <li className="ms-3">
                <NavLink to="" className="link-body-emphasis">
                  <svg className="bi" width="24" height="24"></svg>
                </NavLink>
              </li>
              <li className="ms-3">
                <NavLink className="link-body-emphasis">
                  <svg className="bi" width="24" height="24"></svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

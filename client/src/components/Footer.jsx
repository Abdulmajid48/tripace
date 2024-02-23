import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons'

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
                <img src="./images/twitter.svg" alt="" />
              </div>
            </div>
            <div className="bigsection">
              <div className="smallsection">
                <div className="section">
                  <ul className="">
                    <li className="">
                      <a href="www.google.com" className="nav-link ">
                        About us
                      </a>
                    </li>
                    <li className="">
                      <a href="www.google.com" className="nav-link ">
                        FAQ
                      </a>
                    </li>
                    <li className="">
                      <a href="www.google.com" className="nav-link ">
                        Blog
                      </a>
                    </li>
                    <li className="">
                      <a href="www.google.com" className="nav-link ">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="section">
                  <ul className="">
                    <li className=" ">
                      <a href="www.google.com" className="nav-link ">
                        Legal
                      </a>
                    </li>
                    <li className=" ">
                      <a href="www.google.com" className="nav-link ">
                        Cookies
                      </a>
                    </li>
                    <li className=" ">
                      <a href="www.google.com" className="nav-link ">
                        Privacy Policy
                      </a>
                    </li>
                    <li className=" ">
                      <a href="www.google.com" className="nav-link ">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="section">
                  <ul className="">
                    <li className="">
                      <a href="www.google.com" className="nav-link">
                        Legal
                      </a>
                    </li>
                    <li className="">
                      <a href="www.google.com" className="nav-link">
                        Cookies
                      </a>
                    </li>
                    <li className="">
                      <a href="www.google.com" className="nav-link">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="">
                      <a href="www.google.com" className="nav-link">
                        Contact Us
                      </a>
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
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="www.google.com">
                  <svg className="bi" width="24" height="24"></svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="www.google.com">
                  <svg className="bi" width="24" height="24"></svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="www.google.com">
                  <svg className="bi" width="24" height="24"></svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

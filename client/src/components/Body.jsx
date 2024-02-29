import { NavLink } from "react-router-dom";
import Bodyparts from "./Bodyparts";
import bodies from "./Bodies";

// Home Page Body Elements
function Body() {
  return (
    <div className="general">
      <div className="imgdiv">
        <div className="imgword smallsize">
          <p className="welcome">WELCOME TO TRIPACE</p>
          <p className="wemake">
            We Make <span className="organise">Organising Your Trip</span>{" "}
            Easier
          </p>
          <p className="wecover">
            We cover all aspects of your trip, so you can focus on enjoying it.
            From inspiration of where to go, planning a schedule, to finding the
            best prices, we’ve got you covered!
          </p>
          <NavLink to="newuser">
            <button className="bodybtn">Get started here</button>
          </NavLink>
        </div>
        <img className="airport" src="./images/imageairpot.jpg" alt="" />
      </div>
      <div className="virtual">
        <div className="smallvirtual">
          <div className="topvirtual">
            <p className="access">Access Your Own Virtual Travel Assistant</p>
            <p className="imagine">
              Imagine having your very own assistant you can ask questions any
              time of the day. From finding a flight to planning a visa
              application, TripAce can help with all aspects of your trip.
            </p>
            {/* remove */}
            <NavLink to="/authouser">
              <button className="getstarted">Get Started</button>
            </NavLink>
          </div>
          <div className="bigdashboard">
            <img src="./images/Dashboard.svg" alt="" />
          </div>
        </div>
      </div>

      {bodies.map((bodie, index) => {
        return (
          <Bodyparts
            id={bodie.id}
            key={index}
            img={bodie.img}
            first={bodie.name}
            second={bodie.description}
            button={bodie.button}
          />
        );
      })}

      <div className="floatitems">
        <div className="whatpeople">
          <p>What People Have to Say About Us</p>
        </div>
        <div className="testimonials">
          <div class="custom"></div>

          <svg
            style={{ visibility: "hidden", position: "absolute" }}
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="round">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="20"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
          <div className="floatright">
            <img className="star" src="./images/star.png" alt="" />
            <p className="thereare">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem.
              fered alteration in some form, by injected humour, or randomised
              words which don't look even slightly believable. If you are going
              to use a passage of Lorem.
            </p>
            <div className="radiusarrow">
              <p className="radius radius1">
                <i className="arrow left"></i>
              </p>
              <p className="radius radius2">
                <i className="arrow right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;

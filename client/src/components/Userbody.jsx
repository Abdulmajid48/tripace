import { NavLink } from "react-router-dom";
import { Location, Tools, Trip } from "./Bodyparts";
import { trips, tripaceTools, locations } from "./Bodies";

// Authouser Page Body

function Userbody() {
  return (
    <div>
      <div className="userdiv">
        <ul className=" navitems navlist">
          <li>
            <NavLink to="/travelideas" className="homebutton navlink">
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
          <li>
            <NavLink to="/airporttaxi" className="navlink">
              Airpot taxi
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="usercontainer">
        <div className="userwelcome">
          <div className="bigwelcome">
            <div className="bigwelcomesmall">
              <p className="welcomename">
                <span>WELCOME WASIU MALEEK!</span>
              </p>
              <p className="wherewouldyou">Where would you like to go today?</p>
            </div>
            <div className="forminput userbodyform">
              <label for="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="email"
                className="formi"
                placeholder="Select a Country"
              />
              <button className=" buttonq" type="button">
                Sign up
              </button>
            </div>
            <div>
              <p className="ordoyou">
                Or do you want us to generate ideas for you?
              </p>
              <div className="radiodiv">
                <div className="radio">
                  <input className="radioobject" name="radio" type="radio" />{" "}
                  Yes, generate ideas for me.
                </div>
                <div className="radio">
                  <input className="radioobject" name="radio" type="radio" />{" "}
                  No, I have a place in mind.
                </div>
              </div>
            </div>
          </div>
          <div className="topimages">
            <img className="flipimage" src="./images/country.svg" alt="" />
            <img
              className="flipimage topimage"
              src="./images/countries.svg"
              alt=""
            />
          </div>
        </div>
        <div className="alltools">
          <div className="toolslogo">TripAce tools</div>
          <div className="tools">
            {tripaceTools.map((tool, index) => {
              return (
                <Tools
                  key={index}
                  id={tool.id}
                  name={tool.name}
                  description={tool.description}
                  img={tool.obj}
                  arrow={tool.arrow}
                  color={tool.color}
                  link={tool.link}
                />
              );
            })}
          </div>
        </div>
        {trips.map((trip, index) => {
          return (
            <Trip
              key={index}
              recent={trip.recent}
              triplist={trip.triplist}
              img={trip.img}
              youdont={trip.youdont}
              youcan={trip.youcan}
            />
          );
        })}
        <div div className="viewalldiv">
          <div className="recommend">Recommended trips for you</div>
          <span className="viewall">
            View all <img src="./images/vector.svg" alt="" />
          </span>
        </div>
        <div className="locationcontainer">
          {locations.map((location, index) => {
            return (
              <Location
                key={index}
                id={location.id}
                name={location.name}
                description={location.description}
                btn={location.btn}
                img={location.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Userbody;

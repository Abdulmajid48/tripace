import { airlines, countries } from "../components/Bodies";
import { Airlineschedule, Flight } from "../components/Bodyparts";
import Authnavbar from "../components/Navbars";

function Flights() {
  return (
    <div>
      <Authnavbar />
      <Flight
        img={'url("./images/bookingpic.svg")'}
        howcan={"Available Flights"}
        givebrief={
          "Choose a flights from the available flights generated for you"
        }
        step={<span className="flightstep">Skip</span>}
        filter={"Filter"}
        roundtrip={
          <select style={{ width: "147px" }} required>
            <option className="optionword" value="" disabled selected hidden>
              Round trip
            </option>
            {countries.map((country, index) => {
              return <option value={index}>{country}</option>;
            })}
          </select>
        }
        two={
          <select style={{ width: "109px" }} required>
            <option value="" disabled selected hidden>
              2
            </option>
            {countries.map((country, index) => {
              return <option value={index}>{country}</option>;
            })}
          </select>
        }
        Economy={
          <select style={{ width: "183px" }} required>
            <option value="" disabled selected hidden>
              Economy
            </option>
            {countries.map((country, index) => {
              return <option value={index}>{country}</option>;
            })}
          </select>
        }
        All={
          <select style={{ width: "183px" }} required>
            <option value="" disabled selected hidden>
              All categories
            </option>
            {countries.map((country, index) => {
              return <option value={index}>{country}</option>;
            })}
          </select>
        }
        airline={
          <div className="availableflights">
            {airlines.map((airline, index) => {
              return (
                <Airlineschedule
                  key={index}
                  location={airline.location}
                  currenttime={airline.currenttime}
                  traveltime={airline.traveltime}
                  destination={airline.destination}
                  amount={airline.amount}
                  arrival={airline.arrival}
                  btn={airline.btn}
                />
              );
            })}
          </div>
        }
      />
    </div>
  );
}

export default Flights;

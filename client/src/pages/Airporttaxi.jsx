import { countries, taxis } from "../components/Bodies";
import { Airporttaxiquality, Taxi } from "../components/Bodyparts";
import Authnavbar from "../components/Navbars";

function Airporttaxi() {
  return (
    <div>
      <Authnavbar />
      <Taxi
        img={'url("./images/bookingpic.svg")'}
        howcan={"Available Airport taxi"}
        givebrief={
          "Choose a taxi from the available TripAce airport taxi generated for you."
        }
        step={<span className="flightstep">Skip</span>}
        location={"Location"}
        locationselect={
          <select style={{ width: "652px" }} required>
            <option value="" disabled selected hidden>
              Tiffany Hotels and towers, Canada.
            </option>
            {countries.map((date, index) => {
              return <option value={index}>{date}</option>;
            })}
          </select>
        }
        airporttaxiquality={
          <div className="hotels">
            {taxis.map((taxi, index) => {
              return (
                <Airporttaxiquality
                  key={index}
                  img={taxi.img}
                  amount={taxi.amount}
                  taxiquality={taxi.taxiquality}
                  btn={taxi.btn}
                />
              );
            })}
          </div>
        }
      />
      
    </div>
    
  );
}

export default Airporttaxi;

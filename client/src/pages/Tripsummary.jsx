import {
  Airlineschedule,
  Airporttaxiquality,
  Hotelschedule,
  Summary,
} from "../components/Bodyparts";
import Authnavbar from "../components/Navbars";
import { airlines, hotels, taxis } from "../components/Bodies";

function Tripsummary() {
  return (
    <div>
      <Authnavbar />
      <Summary
        img={'url("./images/bookingpic.svg")'}
        howcan={"Your Trip to Canada Summary"}
        givebrief={
          "Choose a taxi from the available TripAce airport taxi generated for you."
        }
        step={<span className="flightstep">Save & Pay later</span>}
        airline={
          <div>
            {airlines
              .filter((airline) => airline.id === 1)
              .map((airline, index) => (
                <Airlineschedule
                  added={true}
                  key={index}
                  location={airline.location}
                  currenttime={airline.currenttime}
                  traveltime={airline.traveltime}
                  destination={airline.destination}
                  amount={airline.amount}
                  arrival={airline.arrival}
                  btn={airline.btn}
                />
              ))}
          </div>
        }
        hotelschedule={
          <div className="hotels">
            {hotels
              .filter((hotel) => hotel.id === 1)
              .map((hotel, index) => {
                return (
                  <Hotelschedule
                    added={true}
                    key={index}
                    img={hotel.img}
                    amount={hotel.amount}
                    hotelname={hotel.hotelname}
                    btn={hotel.btn}
                  />
                );
              })}
          </div>
        }
        taxi={
          <div className="hotels">
            {taxis
              .filter((taxi) => taxi.id === 1)
              .map((taxi, index) => {
                return (
                  <Airporttaxiquality
                    added={true}
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

export default Tripsummary;

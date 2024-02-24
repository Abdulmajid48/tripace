import { cities, countries, states } from "../components/Bodies";
import { Bookingform } from "../components/Bodyparts";
import { Inspirationbar } from "../components/Navbars";

function Itinerary() {
  return (
    <div>
      <Inspirationbar />
      <div>
        <Bookingform
          bookings={true}
          travelinspiration={true}
          img={'url("./images/itineraryimg.svg")'}
          howcan={"Generate Itinerary"}
          givebrief={
            "We’ve got you covered to get travel ideas. Answer the following questions and a few options will be generated for you."
          }
          step={"Step 1 of 2"}
          destination={"Destination & Accommodation"}
          selectword1={"What type of traveler are you?"}
          next={"/travelinspiration2"}
          prevword={
            <button
              className="getstarted"
              style={{
                backgroundColor: "#ffffff",
                padding: "8px",
                height: "40px",
                color: "#000000",
              }}
            >
              Previous
            </button>
          }
          nextword={
            <button
              className="getstarted"
              style={{ padding: "8px", height: "40px" }}
            >
              Next
            </button>
          }
          select1={
            <select required>
              <option value="" disabled selected hidden>
                Select One
              </option>
              {countries.map((country, index) => {
                return <option value={index}>{country}</option>;
              })}
            </select>
          }
          selectword2={"Destination you would like to visit"}
          select2={
            <select required>
              <option value="" disabled selected hidden>
                Select One
              </option>
              {states.map((state, index) => {
                return <option value={index}>{state}</option>;
              })}
            </select>
          }
          selectword3={"The type of accommodation you preferred"}
          select3={
            <select required>
              <option value="" disabled selected hidden>
                Select One
              </option>
              {cities.map((city, index) => {
                return <option value={index}>{city}</option>;
              })}
            </select>
          }
        />
      </div>
    </div>
  );
}

export default Itinerary;

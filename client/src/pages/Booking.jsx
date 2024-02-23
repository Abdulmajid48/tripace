import { Bookingform } from "../components/Bodyparts";
import Authnavbar from "../components/Navbars";
import { cities, states, countries, dates } from "../components/Bodies";
// import { useNavigate } from "react-router-dom";

function Firststep() {
  //  const navigate = useNavigate();

  return (
    <div>
      <Authnavbar />
      <Bookingform
        bookings={true}
        img={'url("./images/bookingpic.svg")'}
        howcan={"How Can we help you?"}
        givebrief={
          "Give brief information of your trips and all the availability will be generated for you."
        }
        step={"Step 1 of 2"}
        destination={"Tell Us About Your Destination"}
        selectword1={"Which country are you traveling to?"}
        next={"/secondstep"}
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
        selectword2={"Select the state you are going in this country"}
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
        selectword3={"Tell us the city you are going"}
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
  );
}

function Secondstep() {
  //  const navigate = useNavigate();  previous={() => navigate(-1)}
  return (
    <div>
      <Authnavbar />
      <Bookingform
        bookings={true}
        img={'url("./images/bookingpic.svg")'}
        howcan={"How Can we help you?"}
        givebrief={
          "Give brief information of your trips and all the availability will be generated for you."
        }
        step={"Step 2 of 2"}
        destination={"Tell Us About Your Departure"}
        selectword1={"From which country are you coming?"}
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
        step2word1={"Departure date"}
        step2select1={
          <select style={{ width: "235px" }} required>
            <option value="" disabled selected hidden>
              Select One
            </option>
            {dates.map((date, index) => {
              return <option value={index}>{date}</option>;
            })}
          </select>
        }
        step2word2={"Return date"}
        step2select2={
          <select style={{ width: "235px" }} required>
            <option value="" disabled selected hidden>
              Select One
            </option>
            {dates.map((date, index) => {
              return <option value={index}>{date}</option>;
            })}
          </select>
        }
      />
    </div>
  );
}

export default Firststep;
export { Secondstep };

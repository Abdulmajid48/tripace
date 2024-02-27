import { NavLink } from "react-router-dom";

function Bodyparts(props) {
  // Home page Body elements
  return (
    <div
      className="traveldiv"
      // change the second div direction to row-reverse
      style={{ flexDirection: props.id !== 3 ? "row" : "row-reverse" }}
    >
      <div>
        <img src={props.img} alt="" />
      </div>
      <div
        className="travel"
        style={{ justifyContent: props.id !== 1 ? "space-between" : null }}
      >
        <p
          className="inspiration"
          style={{
            paddingBottom: props.id === 3 ? "100px" : null,
            position: props.id === 2 ? "relative" : null,
            bottom: props.id === 2 ? "25px" : null,
          }}
        >
          {props.first}
        </p>
        <p className="wehelp">{props.second}</p>
        <button className="getstarted">{props.button}</button>
      </div>
    </div>
  );
}

function Tools(props) {
  // Tripace tools component
  return (
    <div className="tool">
      <div className="firsttool" style={{ backgroundColor: props.color }}></div>
      <div className="secondtool">
        <div className="toolimg">
          <img src={props.img} alt="" />
        </div>
        <p className="travelinspiration">{props.name}</p>
        <p className="generate">{props.description}</p>
      </div>
      <div>
        <NavLink to={props.link}>
          <img className="toolarrow" src={props.arrow} alt="" />
        </NavLink>
      </div>
    </div>
  );
}

function Trip(props) {
  // Ongoing trip and recent trips
  return (
    <div className="tripcontainer">
      <div className="tripfirstdiv">
        <div className="recentact">{props.recent}</div>
        {props.triplist}
      </div>
      <div className="tripseconddiv">
        <div className="tripsecondinnerdiv">
          <div>
            <img src={props.img} alt="" />
          </div>
          <div className="youdonthave">{props.youdont}</div>
          <div className="youcansee">{props.youcan}</div>
        </div>
      </div>
    </div>
  );
}

function Location(props) {
  // Recommended trip for you
  return (
    <div
      className="locationdiv"
      style={{
        backgroundImage: `url(${props.img})`,
        width: props.montreal ? "958px" : null,
        height: props.montreal ? "355px" : null,
        gap: props.montreal ? "30px" : null,
      }}
    >
      <div className="ontario">{props.name}</div>
      <div className="describe">{props.description}</div>
      <div>
        <button
          className="locationbtn"
          style={{ backgroundColor: props.montreal ? "#FFFFFF" : null }}
        >
          {props.btn}
        </button>
      </div>
    </div>
  );
}

function Bookingform(props) {
  // My Bookings Page
  return (
    <div className="bookingform">
      <div className="bookingpicdiv" style={{ backgroundImage: props.img }}>
        <img className="arrowback" src="./images/arrowback.svg" alt="" />
      </div>
      <div className="bookingdiv">
        <div className="bookingheader">
          <div className="headerword">
            <div className="howcan">{props.howcan}</div>
            <div className="givebrief">{props.givebrief}</div>
          </div>
          <div
            className="step"
            style={{
              color: props.travelinspiration ? "#8966BB" : null,
              marginLeft: props.travelinspiration ? "90px" : null,
            }}
          >
            {props.step}
          </div>
        </div>
        <div className="bookings">
          <div
            className="bookinginputs"
            style={{
              display: props.bookings ? null : "none",
              marginTop: props.travelinspiration ? "50px" : null,
            }}
          >
            <div className="tellus">{props.destination}</div>
            <div class="custom-select">
              <div className="selectp">{props.selectword1}</div>
              {props.select1}
            </div>
            <div class="custom-select">
              <div className="selectp">{props.selectword2}</div>
              {props.select2}
            </div>
            <div class="custom-select">
              <div className="selectp">{props.selectword3}</div>
              {props.select3}
            </div>
            <div className="steptwospecial">
              <div class="custom-select">
                <div className="selectp">{props.step2word1}</div>
                {props.step2select1}
              </div>
              <div class="custom-select">
                <div className="selectp">{props.step2word2}</div>
                {props.step2select2}
              </div>
            </div>
            <></>
          </div>
          <div className="bookingbtns">
            <NavLink to={props.previous}>{props.prevword}</NavLink>
            <NavLink to={props.next}>{props.nextword}</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function Flight(props) {
  // Flight Page
  return (
    <div>
      <div className="bookingform">
        <div className="bookingpicdiv" style={{ backgroundImage: props.img }}>
          <img className="arrowback" src="./images/arrowback.svg" alt="" />
        </div>
        <div className="bookingdiv">
          <div className="bookingheader">
            <div className="headerword">
              <div className="howcan">{props.howcan}</div>
              <div className="givebrief">{props.givebrief}</div>
            </div>
            <div className="step">{props.step}</div>
          </div>
          <div className="steptwospecial">
            <div className="filterword">{props.filter}</div>
            <div class="custom-select">{props.roundtrip}</div>
            <div class="custom-select">{props.two}</div>
            <div class="custom-select">{props.Economy}</div>
            <div class="custom-select">{props.All}</div>
          </div>
          {props.airline}
        </div>
      </div>
    </div>
  );
}

function Airlineschedule(props) {
  // Flight Page Schedule
  return (
    <div
      className="airlinewhite"
      style={{
        width: props.added ? "840px" : null,
        marginBottom: props.added ? "20px" : null,
      }}
    >
      <div className="flightdiv">
        <div className="airlinediv">
          <div className="airlinelogo">Airline Logo</div>
        </div>
        <div className="airlinestime">
          <div className="united">United Airlines</div>
          <div className="firsttime">
            <div className="location">
              <div className="timebold">{props.currenttime}</div>
              <div className="timethin">{props.location}</div>
            </div>
            <div className="location">
              <div className="timethin">{props.traveltime}</div>
              <div className="timethin">
                <img src="./images/navigation.svg" alt="" />
              </div>
              <div className="timethin">0 Stop</div>
            </div>
            <div className="location">
              <div className="timebold">{props.arrival}</div>
              <div className="timethin">{props.destination}</div>
            </div>
          </div>
          <div className="firsttime">
            <div className="location">
              <div className="timebold">{props.currenttime}</div>
              <div className="timethin">{props.location}</div>
            </div>
            <div className="location">
              <div className="timethin">{props.traveltime}</div>
              <div className="timethin">
                <img src="./images/navigation.svg" alt="" />
              </div>
              <div className="timethin">0 Stop</div>
            </div>
            <div className="location">
              <div className="timebold">{props.arrivaltime}</div>
              <div className="timethin">{props.destination}</div>
            </div>
          </div>
        </div>
        <div className="amountdiv">
          <div>
            <div>
              <button className="recommendbtn">{props.btn}</button>
            </div>
            <div className="amount">{props.amount}</div>
          </div>
          {!props.added ? (
            <button className="bookflightbtn">Book Flight</button>
          ) : (
            <div className="added">
              <div className="addedword">Added</div>
              <div className="remove">Remove/Cancel</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Hotel(props) {
  // Hotel Page
  return (
    <div>
      <div className="bookingform">
        <div className="bookingpicdiv" style={{ backgroundImage: props.img }}>
          <img className="arrowback" src="./images/arrowback.svg" alt="" />
        </div>
        <div className="bookingdiv">
          <div className="bookingheader">
            <div className="headerword">
              <div className="howcan">{props.howcan}</div>
              <div className="givebrief">{props.givebrief}</div>
            </div>
            <div className="step">{props.step}</div>
          </div>
          <div className="steptwospecial">
            <div className="filterword">{props.filter}</div>
            <div className="filteroptions">
              <div class="filteroption">{props.roundtrip}</div>
              <div class="filteroption">{props.two}</div>
              <div class="filteroption">{props.Economy}</div>
            </div>
          </div>
          {props.hotelschedule}
        </div>
      </div>
    </div>
  );
}

function Hotelschedule(props) {
  // Hotel Page Schedule
  return (
    <div className="bookhotel" style={{ width: props.added ? "840px" : null }}>
      <div className="hotelimage" style={{ backgroundImage: props.img }}></div>
      <div className="hotelandamountdiv">
        <div className="hotel">
          <div className="hotelname">{props.hotelname}</div>
          <div className="hotelmenu">
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> Free breakfast
            </div>
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> Restaurant
            </div>
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> Free parking
            </div>
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> Free laundry service
            </div>
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> Free Wifi
            </div>
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> Bar
            </div>
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> Pool
            </div>
          </div>
          <div className="hotelrating">
            <div className="ratingword">
              <img src="./images/ratingstar.svg" alt="" /> 5.0(230)
            </div>
            <div className="viewdetails ratingword">View details</div>
          </div>
        </div>
        <div
          className="amountdiv"
          style={{ marginLeft: props.added ? "50px" : null }}
        >
          <div>
            <div>
              <button
                className="recommendbtn"
                style={{ borderRadius: "5px", border: "none" }}
              >
                {props.btn}
              </button>
            </div>
            <div className="amount">{props.amount}</div>
          </div>
          {!props.added ? (
            <button className="bookflightbtn" style={{ marginTop: "10px" }}>
              Book Hotel
            </button>
          ) : (
            <div className="added">
              <div className="addedword">Added</div>
              <div className="remove">Remove/Cancel</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Taxi(props) {
  // Taxi Page
  return (
    <div>
      <div className="bookingform">
        <div className="bookingpicdiv" style={{ backgroundImage: props.img }}>
          <img className="arrowback" src="./images/arrowback.svg" alt="" />
        </div>
        <div className="bookingdiv">
          <div className="bookingheader">
            <div className="headerword">
              <div className="howcan">{props.howcan}</div>
              <div className="givebrief" style={{ width: "600px" }}>
                {props.givebrief}
              </div>
            </div>
            <div className="step" style={{ marginLeft: "-180px" }}>
              {props.step}
            </div>
          </div>
          <div className="airporttaxidiv" style={{ width: "860px" }}>
            <div className="airporttaxi">
              <div className="basedon">Based on your Flights & Hotel</div>
              <div className="pickup">
                <div className="pickuplocation">
                  <div className="pickupthin">Pick-up Location</div>
                  <div className="pickupbold">PHC International Airport</div>
                </div>
                <div className="pickupdate">
                  <div className="pickupthin">Pick-up Date & time</div>
                  <div className="pickupbold">
                    Fri, 6th October, 2020. 10:30am
                  </div>
                </div>
                <div className="pickupperson">
                  <div className="pickupthin">Travellers</div>
                  <div className="pickupbold">One(1)</div>
                </div>
              </div>
              <div class="custom-select">
                <div className="selectp">{props.location}</div>
                {props.locationselect}
              </div>
            </div>
          </div>
          {props.airporttaxiquality}
        </div>
      </div>
    </div>
  );
}

function Airporttaxiquality(props) {
  // Taxi Page Schedule
  return (
    <div className="bookhotel" style={{ width: "840px" }}>
      <div className="hotelimage" style={{ backgroundImage: props.img }}></div>
      <div className="hotelandamountdiv">
        <div className="hotel" style={{ width: "350px" }}>
          <div>
            <div className="hotelname"> {props.taxiquality}</div>
            <div className="cartype">Car type name appears here</div>
          </div>
          <div className="hotelmenu">
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> 3 Passengers
            </div>
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> 2 standard bags
            </div>
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> Meeting & Greeting
            </div>
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> Waiting, if flight
              delay
            </div>
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> AC
            </div>
            <div className="hotelmenulist">
              <img src="./images/checkcircle.svg" alt="" /> Refreshment
            </div>
          </div>
          <div className="hotelrating">
            <div className="ratingword">
              <img src="./images/ratingstar.svg" alt="" /> 5.0(230)
            </div>
            <div className="viewdetails ratingword">
              Free Cancellation included
            </div>
          </div>
        </div>
        <div
          className="amountdiv"
          style={{ gap: "165px", width: "200px", alignItems: "center" }}
        >
          <div>
            <div className="amount">{props.amount}</div>
          </div>
          {!props.added ? (
            <button className="bookflightbtn" style={{ marginTop: "10px" }}>
              Book Taxi
            </button>
          ) : (
            <div className="added">
              <div className="addedword">Added</div>
              <div className="remove">Remove/Cancel</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Summary(props) {
  // Cart Page
  return (
    <div>
      <div className="bookingform">
        <div className="bookingpicdiv" style={{ backgroundImage: props.img }}>
          <img className="arrowback" src="./images/arrowback.svg" alt="" />
        </div>
        <div className="bookingdiv">
          <div className="bookingheader">
            <div className="headerword">
              <div className="howcan" style={{ width: "500px" }}>
                {props.howcan}
              </div>
              <div className="givebrief" style={{ width: "600px" }}>
                {props.givebrief}
              </div>
            </div>
            <div className="step" style={{ marginLeft: "-265px" }}>
              {props.step}
            </div>
          </div>
          <div className="tripsummary">
            {props.airline}
            {props.hotelschedule}
            {props.taxi}
          </div>
          <div className="summary">
            <div className="paymentsummary">Payment Summary</div>
            <div className="summarydiv">
              <div className="payment" style={{ border: "none" }}>
                <p>Flight</p>
                <p>#20,400</p>
              </div>
              <div className="payment">
                <p>Hotel</p>
                <p>#20,400</p>
              </div>
              <div className="payment">
                <p>Taxi</p>
                <p>#20,400</p>
              </div>
              <div className="payment total">
                <p>Total</p>
                <p>#20,400</p>
              </div>
            </div>
            <div className="summarybtn">
              <button className="addvisapayment">Add Visa Payment</button>
              <button className="checkout">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Travelidea(props) {
  // Travel Ideas --- Dashboard
  return (
    <div>
      <div className="bookingform">
        <div className="bookingpicdiv" style={{ backgroundImage: props.img }}>
          <img className="arrowback" src="./images/arrowback.svg" alt="" />
        </div>
        <div className="bookingdiv">
          <div className="bookingheader">
            <div className="headerword">
              <div className="howcan">{props.howcan}</div>
              <div className="givebrief" style={{ width: "600px" }}>
                {props.givebrief}
              </div>
            </div>
          </div>
          <div className="travelideas">{props.idea}</div>
        </div>
      </div>
    </div>
  );
}

function Idea(props) {
  // Travel Idea Div
  return (
    <div className="travelideadiv">
      <div className="montreal"> {props.city}</div>
      <div>
        <p className="accomodation">Accommodation:</p>
        <ul className="lists">
          <li>{props.accomodation}</li>
        </ul>
      </div>
      <div>
        <p className="accomodation">Highlights:</p>
        <ul className="lists">
          <li>{props.highlight1}</li>
          <li>{props.highlight2}</li>
          <li>{props.highlight3}</li>
        </ul>
      </div>
      <NavLink to={props.link}>
        <div className="learnmore">
          <span>Learn More</span> <img src="./images/redarrow.svg" alt="" />
        </div>
      </NavLink>
    </div>
  );
}

export default Bodyparts;
export {
  Tools,
  Trip,
  Location,
  Bookingform,
  Flight,
  Airlineschedule,
  Hotel,
  Hotelschedule,
  Taxi,
  Airporttaxiquality,
  Summary,
  Travelidea,
  Idea,
};

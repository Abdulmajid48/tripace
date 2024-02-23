import { hotels } from "../components/Bodies";
import { Hotel, Hotelschedule } from "../components/Bodyparts";
import Authnavbar from "../components/Navbars";

function Hotels() {
  return (
    <div>
      <Authnavbar />
      <Hotel
        img={'url("./images/bookingpic.svg")'}
        howcan={"Available Hotels"}
        givebrief={
          "Choose an hotel to stay from the available hotels/lodge generated for you."
        }
        step={<span className="flightstep">Skip</span>}
        filter={"Filter by:"}
        roundtrip={<div>Recommended</div>}
        two={<div>Cheapest</div>}
        Economy={<div>Fastest</div>}
        hotelschedule={
          <div className="hotels">
            {hotels.map((hotel, index) => {
              return (
                <Hotelschedule
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
      />
    </div>
  );
}
export default Hotels;

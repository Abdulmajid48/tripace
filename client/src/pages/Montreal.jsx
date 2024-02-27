import { NavLink } from "react-router-dom";
import { Location } from "../components/Bodyparts";
import { Inspirationbar } from "../components/Navbars";

function Montreal(props) {
  return (
    <div>
      <Inspirationbar />
      <div className="montrealdiv">
        <div className="aboutmontreal">About Montreal</div>
        <img className="arrowback" src="./images/arrowback.svg" alt="arrow" />
        <div>
          <Location
            name="Montreal, Ontario, Canada"
            description="Ontario is a province in east-central Canada that borders the U.S. and the Great Lakes."
            btn="Book Flight"
            img="./images/ontario.jpg"
            montreal={true}
          />
        </div>
        <div
          className="travelideadiv"
          style={{ width: "958px", height: "474px", paddingBottom: "450px" }}
        >
          <div className="ontariolearnmore">
            {" "}
            <div className="montreal">Montreal, Ontario, Canada</div>
            <div
              className="learnmore"
              style={{ marginTop: "0", fontWeight: "500" }}
            >
              <NavLink to="">
                <span>Show on map </span>
                <img src="./images/redarrow.svg" alt="" />{" "}
              </NavLink>
            </div>
          </div>

          <div>
            <p className="accomodation">About</p>
            <ul className="montreallists">
              <li style={{ fontWeight: "400", marginRight: "100px" }}>
                Ontario is a province in east-central Canada that borders the
                U.S. and the Great Lakes. It's home to Ottawa, Canada's capital,
                known for Parliament Hill’s Victorian architecture and the
                National Gallery, featuring Canadian and indigenous art.
                Toronto, Ontario's capital, is home to the 553m-high CN Tower,
                with expansive views from its revolving restaurant, as well as
                High Park, site of a rare oak savannah habitat.
              </li>
              <li>Area: 1.076 million km²</li>
              <li> Founded: 1 July 1867</li>
              <li>Capital: Toronto</li>
              <li> Population: 14.57 million (2019) StatCan</li>
              <li> Canadian postal abbr: ON</li>
              <li>Postal code prefix: K L M N P</li>
              <li> Premier: Doug Ford</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="montrealviewall">
            <div className="staysinmontreal">Stays in Montreal</div>
            <div className=" montrealall">
              View all <img src="./images/vector.svg" alt="" />
            </div>
          </div>
          <div className="montrealboxes">
            <div className="montrealbox">
              <img
                className="montrealboximg"
                src="./images/montrealroom.svg"
                alt=""
              />
              <div className="montrealhotel">Hotels</div>
            </div>
            <div className="montrealbox">
              <img
                className="montrealboximg"
                src="./images/montrealwindow.svg"
                alt=""
              />
              <div className="montrealhotel">Apartments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Montreal;

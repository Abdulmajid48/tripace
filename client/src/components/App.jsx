import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Olduser from "../pages/Olduser";
import Newuser from "../pages/Newuser";
import Oldmember from "../pages/Oldmember";
import Authouser from "../pages/Authouser";
import Firststep, { Secondstep } from "../pages/Booking";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Airporttaxi from "../pages/Airporttaxi";
import Tripsummary from "../pages/Tripsummary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/newuser" element={<Newuser />} />
      <Route path="/olduser" element={<Olduser />} />
      <Route path="/oldmember" element={<Oldmember />} />
      <Route path="/authouser" element={<Authouser />} />
      <Route path="/firststep" element={<Firststep />} />
      <Route path="/secondstep" element={<Secondstep />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/airporttaxi" element={<Airporttaxi />} />
      <Route path="/tripsummary" element={<Tripsummary />} />

      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default App;

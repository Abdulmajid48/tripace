const bodies = [
  {
    id: 1,
    img: "./images/Travel Inspiration.png",
    name: "Travel Inspiration",
    description:
      "We help you generate a range of inspiration of where to go with the plan of your trip simply based on the answers supplied to few TripAce Travel Inspiration Questions.",
    button: "Get Started",
  },

  {
    id: 2,
    img: "./images/clearimg.png",
    name: "Bespoke Itinerary",
    description:
      "Get the most out of your trip by using our app to generate tour guide based on your interests and preferences.Simply answer a few questions, and we will generate an itinerary you can follow to get the most out of any destination!",
    button: "Get Started",
  },

  {
    id: 3,
    img: "./images/clearimg.png",
    name: "Find The Best Prices",
    description:
      "We’ll find you the best flights, discounts and hidden offers so you can bring your dream trips to life!",
    button: "Get Started",
  },
];

const tripaceTools = [
  {
    id: 1,
    obj: "./images/lightbulb.svg",
    name: "Travel Inspiration",
    description:
      "Generate a range of inspiration of where to go with the plan of your trip.",
    color: "#FD632F",
    arrow: "./images/arrow.svg",
  },
  {
    id: 2,
    obj: "./images/itinerary.svg",
    name: "Generate Itinerary",
    description:
      "Generate an itinerary(tour guide) based on your interests and preferences.",
    color: "#06031E",
    arrow: "./images/arrow.svg",
  },
  {
    id: 3,
    obj: "./images/find.svg",
    name: "Find Best Prices",
    description:
      "Find the best flights, discounts and hidden offers so you can bring your dream trips to life.",
    color: "#AE9CC4",
    arrow: "./images/arrow.svg",
  },
];

const trips = [
  {
    id: 1,
    recent: "Ongoing Trip",
    img: "./images/tripsecondimg.svg",
    youdont: "You don’t have any ongoing trip.",
    youcan: "You can see all of your ongoing trips or bookings here",
  },
  {
    id: 2,
    recent: "Recent Activities",
    triplist: (
      <div className="triplist">
        <p className="tripline">Inspiration</p>
        <p className="tripline">Itinerary</p>
        <p className="tripline">Flights</p>
        <p className="tripline">Flights</p>
        <p className="tripline">Hotel</p>
        <p className="tripline">Visa</p>
      </div>
    ),
    img: "./images/tripsecondimg.svg",
    youdont: "You don’t have any recent trip.",
    youcan: "You can see all of your recent trips here",
  },
];

const locations = [
  {
    id: 1,
    name: "Ontario, Canada",
    description:
      "Ontario is a province in east-central Canada that borders the U.S. and the Great Lakes.",
    btn: "Learn More",
    img: "./images/ontario.jpg",
  },
  {
    id: 2,
    name: "Jeddah, Saudi Arabia",
    description:
      "Explore the Saudi Arabian port city on the Red Sea, the gateway for pilgrimages to the Islamic holy cities, Mecca and Medina.",
    btn: "Learn More",
    img: "./images/ontario.jpg",
  },
];

const countries = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const states = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const cities = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const dates = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const airlines = [
  {
    id: 1,
    currenttime: "9:30am (LOS)",
    traveltime: "4hrs 15m",
    arrival: "1:45pmLHR",
    amount: "NGN 1,892,933",
    location: "Lagos",
    destination: "Canada",
    btn: "Recommended",
  },
  {
    id: 2,
    currenttime: "9:30am (LOS)",
    traveltime: "4hrs 15m",
    arrival: "1:45pmLHR",
    amount: "NGN 1,892,933",
    location: "Lagos",
    destination: "Canada",
    btn: "Fastest",
  },
  {
    id: 3,
    currenttime: "9:30am (LOS)",
    traveltime: "4hrs 15m",
    arrival: "1:45pmLHR",
    amount: "NGN 1,892,933",
    location: "Lagos",
    destination: "Canada",
    btn: "Cheapest",
  },
  {
    id: 4,
    currenttime: "9:30am (LOS)",
    traveltime: "4hrs 15m",
    arrival: "1:45pmLHR",
    amount: "NGN 1,892,933",
    location: "Lagos",
    destination: "Canada",
    btn: "Recommended",
  },
];

const hotels = [
  {
    id: 1,
    hotelname: "Hill Spring Hotel, Canada",
    amount: "NGN 1,892,933",
    btn: "Recommended",
    img: "url('./images/hotelpool.svg')",
  },
  {
    id: 2,
    hotelname: "Hill Spring Hotel, Canada",
    amount: "NGN 1,892,933",
    btn: "Recommended",
    img: "url('./images/hotelbed.svg')",
  },
  {
    id: 3,
    hotelname: "Hill Spring Hotel, Canada",
    amount: "NGN 1,892,933",
    btn: "Recommended",
    img: "url('./images/hotelpool.svg')",
  },
  {
    id: 4,
    hotelname: "Hill Spring Hotel, Canada",
    amount: "NGN 1,892,933",
    btn: "Recommended",
    img: "url('./images/hotelbed.svg')",
  },
];

const taxis = [
  {
    id: 1,
    taxiquality: "Standard",
    amount: "NGN 5,000",
    btn: "Recommended",
    img: "url('./images/taxi.svg')",
  },
  {
    id: 2,
    taxiquality: "Executive",
    amount: "NGN 7,000",
    btn: "Recommended",
    img: "url('./images/taxi.svg')",
  },
  {
    id: 3,
    taxiquality: "People Carrier",
    amount: "NGN 3,500",
    btn: "Recommended",
    img: "url('./images/taxi.svg')",
  },
  {
    id: 4,
    taxiquality: "Standard People Carrier",
    amount: "NGN 3,000",
    btn: "Recommended",
    img: "url('./images/taxi.svg')",
  },
];

export default bodies;
export {
  tripaceTools,
  trips,
  locations,
  countries,
  states,
  cities,
  dates,
  airlines,
  hotels,
  taxis
};

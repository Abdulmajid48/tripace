// Home Page Contents
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

// Tripacetools Contents
const tripaceTools = [
  {
    id: 1,
    obj: "./images/lightbulb.svg",
    name: "Travel Inspiration",
    description:
      "Generate a range of inspiration of where to go with the plan of your trip.",
    color: "#FD632F",
    arrow: "./images/arrow.svg",
    link: "/travelinspiration",
  },
  {
    id: 2,
    obj: "./images/itinerary.svg",
    name: "Generate Itinerary",
    description:
      "Generate an itinerary(tour guide) based on your interests and preferences.",
    color: "#06031E",
    arrow: "./images/arrow.svg",
    link: "/itinerary",
  },
  {
    id: 3,
    obj: "./images/find.svg",
    name: "Find Best Prices",
    description:
      "Find the best flights, discounts and hidden offers so you can bring your dream trips to life.",
    color: "#AE9CC4",
    arrow: "./images/arrow.svg",
    link: "/flights",
  },
];

// Authorised User Page Contents
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

// Authorised User Page Contents
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

// Dropdown contents for Countries
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

// Dropdown contents for States
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

// Dropdown contents for Cities
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

// Dropdown contents for Date
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

// Flight Page Content
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
// Hotel Page Content
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

// Airport Taxi Page contents
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

// Travel Ideas Page content
const travelideas = [
  {
    id: 1,
    city: "Montreal",
    accomodation:
      "Hotel 10 Montreal, located right in the center of downtown Montreal",
    highlights1:
      " Explore the incredible Old Montreal, a 500-year-old neighborhood",
    highlights2:
      "Take a cruise along the St. Lawrence River and admire the beautiful skyline",
    highlights3:
      " Sample the local cuisine in one of Montreal's many restaurants",
    link: "/montreal",
  },
  {
    id: 2,
    city: "Quebec City",
    accomodation:
      "Château Frontenac, a historic hotel with spectacular views of the city",
    highlights1:
      "Stroll through the cobblestoned streets of the UNESCO World Heritage Site of Old Quebec",
    highlights2: "Explore the incredible architectural heritage of the city",
    highlights3:
      "Visit Parc de la Chute-Montmorency, for breathtaking views of the St. Lawrence River",
  },
  {
    id: 3,
    city: "Laurentians",
    accomodation:
      "Mont Tremblant Resort, located in a stunning mountain setting",
    highlights1: "Explore the stunning lakes and lush forests of the region",
    highlights2:
      " Enjoy a unique outdoor adventure, such as whitewater rafting or snowmobiling",
    highlights3: " Sample the local wines and cheeses of the Laurentians",
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
  taxis,
  travelideas,
};

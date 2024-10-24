const WEBSITE_TITLE = "JSON Placeholder App";
const BASE_URL = "http://localhost:8000/"; // "http://192.168.1.2:8000/"; // "https://jsonplaceholder.typicode.com/";
const DEFAULT_USER = {
  id: 0,
  name: "Guest",
  username: "",
  email: "",
  phone: "",
  website: "",
  isDummy: true,
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

export {
  WEBSITE_TITLE,
  BASE_URL,
  DEFAULT_USER,
};
